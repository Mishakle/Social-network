export interface Author {
  _id: string;
  username: string;
}

export interface MessageProps {
  messageId: string;
  text: string;
  author: Author;
  recipient: string;
  createdAt: string;
  updatedAt: string;
}
