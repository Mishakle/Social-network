import io from 'socket.io-client';

let socket;

const createToken = (token) => {
  if (socket) return socket;

  let link = `http://localhost:8080?token=${token}`;

  socket = io(link, {
    withCredentials: true,
    extraHeaders: {
      'my-custom-header': 'abcd',
    },
    autoConnect: false,
  });

  return socket;
};

export default createToken;
