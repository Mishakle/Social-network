import { RootState } from '../store';

export const getDialogList = (state: RootState) => state.dialog.usersDialoglist;

export const getUserMessages = (state: RootState) => state.dialog.activeDialog;

export const getCurrentDialogUser = (state: RootState) => state.dialog.recipient;
