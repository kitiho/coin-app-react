import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';
export const showChequing = ()=>{
    return {
        type:constants.SHOW_CHEQUING
    }
}
export const closeChequing = ()=>{
    return {
        type:constants.CLOSE_CHEQUING
    }
}