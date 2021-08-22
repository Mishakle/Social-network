import {
  LOAD_DIALOGLIST,
  LOAD_MESSAGES,
  NEW_DIALOG_ITEM,
  NEW_DIALOG_MESSAGE,
  NEW_DIALOG_REQUEST,
} from '../types';

export const dialogListItemsActionCreator = () => ({
  type: LOAD_DIALOGLIST,
});

export const dialogMessagesActionCreator = (recipientId) => ({
  type: LOAD_MESSAGES,
  recipientId,
});

export const newMessageActionCreator = (payload) => ({
  type: NEW_DIALOG_MESSAGE,
  payload,
});

export const newDialogItemActionCreator = (payload) => ({
  type: NEW_DIALOG_REQUEST,
  payload,
});
