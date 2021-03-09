import {Action} from '@ngrx/store';
import {TodoActionsTypes} from '../shared/enam/ todo-actions-types.enum'

export class ActionParent implements Action{
    type: any;
    playload: any;
}

export class TodoAdd implements ActionParent{
    type:any;
    payload: any;
}