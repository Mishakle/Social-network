import React, { FC } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import Routes from './routing/Routes';
import './styles.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
