import {
  NEW_DIALOG_MESSAGE,
  SET_ACTIVE_DIALOG,
  SET_DIALOGLIST,
  NEW_DIALOG_ITEM,
} from '../types';

export interface DialogState {
  activeDialog: [];
  usersDialoglist: [];
  recipient: [];
}

const initialState: DialogState = {
  activeDialog: [],
  usersDialoglist: [],
  recipient: [],
};

const dialogReducer = (state: DialogState = initialState, action): DialogState => {
  switch (action.type) {
    case SET_ACTIVE_DIALOG: {
      return { ...state, activeDialog: action.payload };
    }
    case SET_DIALOGLIST: {
      if (!Array.isArray(state.recipient)) {
        action.payload.unshift(state.recipient);
      }
      return { ...state, usersDialoglist: action.payload };
    }
    case NEW_DIALOG_ITEM: {
      return {
        ...state,
        recipient: action.payload.payload,
      };
    }
    case NEW_DIALOG_MESSAGE: {
      const messageArray: any = [...state.activeDialog];
      messageArray.push(action.payload);
      return {
        ...state,
        activeDialog: messageArray,
      };
    }
    default:
      return state;
  }
};

export default dialogReducer;
