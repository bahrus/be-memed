import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig, EnhancementInfo} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';
import {register} from 'be-hive/register.js';

const templSym = Symbol.for('N+uiTE7d3E+p1Zan6c9+dw==');
let map: Map<string, DocumentFragment>;
if((<any>globalThis)[templSym] === undefined){
    map = new Map<string, DocumentFragment>();
    (<any>globalThis)[templSym] = map;
}

const templCntSym = Symbol.for('BbIEPgqUzkKtGgCvL0CEXg==');

if((<any>globalThis)[templCntSym] === undefined) (<any>globalThis)[templCntSym] = 0;

export function getContent(id: string){
    return map.get(id);
}

export class BeMemed extends BE<AP, Actions> implements Actions{
    static  override get beConfig(){
        return {
            // parse: true,
            // primaryProp: 'to'
        } as BEConfig;
    }

    override async attach(enhancedElement: Element, enhancementInfo: EnhancementInfo) {
        let df : DocumentFragment | undefined;
        if(enhancedElement instanceof HTMLTemplateElement){
            df = enhancedElement.content
        }else{
            df = enhancedElement as any as DocumentFragment;
        }
        const templs = df.querySelectorAll('template');
        for(const templ of templs){
            const cnt = (<any>globalThis)[templCntSym] as number;
            (<any>globalThis)[templCntSym] = cnt + 1;
            let id = 'a' + cnt.toString(16);
            templ.setAttribute('be-memed-id', id);
            const clone = templ.content.cloneNode(true) as DocumentFragment;
            map.set(id, clone);
            templ.innerHTML = '';

        }
    }
}

export interface BeMemed extends AllProps{}

const tagName = 'be-memed';
const ifWantsToBe = 'memed';
const upgrade = '*';

const xe = new XE<AP, Actions>({
    config:{
        tagName,
        isEnh: true,
        propDefaults: {
            ...propDefaults,
        },
        propInfo:{
            ...propInfo,
        },
        actions:{

        }
    },
    superclass: BeMemed
});

register(ifWantsToBe, upgrade, tagName);