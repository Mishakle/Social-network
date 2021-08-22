import { Author } from './Messages/interfaces';

export interface MessageText {
  messageText: string;
}

export interface DialogUser {
  _id: string;
  username: string;
  profileImage: string;
}

export interface RecievedMessage {
  _id: string;
  text: string;
  author: Author;
  recipient: string;
  createdAt: string;
  updatedAt: string;
}
