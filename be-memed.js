import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
const templSym = Symbol.for('N+uiTE7d3E+p1Zan6c9+dw==');
let map;
if (globalThis[templSym] === undefined) {
    map = new Map();
    globalThis[templSym] = map;
}
const templCntSym = Symbol.for('BbIEPgqUzkKtGgCvL0CEXg==');
if (globalThis[templCntSym] === undefined)
    globalThis[templCntSym] = 0;
export function getContent(id) {
    return map.get(id);
}
export class BeMemed extends BE {
    static get beConfig() {
        return {
        // parse: true,
        // primaryProp: 'to'
        };
    }
    async attach(enhancedElement, enhancementInfo) {
        let df;
        if (enhancedElement instanceof HTMLTemplateElement) {
            df = enhancedElement.content;
        }
        else {
            df = enhancedElement;
        }
        const templs = df.querySelectorAll('template');
        for (const templ of templs) {
            const cnt = globalThis[templCntSym];
            globalThis[templCntSym] = cnt + 1;
            let id = 'a' + cnt.toString(16);
            templ.setAttribute('be-memed-id', id);
            const clone = templ.content.cloneNode(true);
            map.set(id, clone);
            templ.innerHTML = '';
        }
    }
}
const tagName = 'be-memed';
const ifWantsToBe = 'memed';
const upgrade = '*';
const xe = new XE({
    config: {
        tagName,
        isEnh: true,
        propDefaults: {
            ...propDefaults,
        },
        propInfo: {
            ...propInfo,
        },
        actions: {}
    },
    superclass: BeMemed
});
register(ifWantsToBe, upgrade, tagName);
