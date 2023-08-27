import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';
import {register} from 'be-hive/register.js';

export class BeMemed extends BE<AP, Actions> implements Actions{
    static  override get beConfig(){
        return {
            // parse: true,
            // primaryProp: 'to'
        } as BEConfig;
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