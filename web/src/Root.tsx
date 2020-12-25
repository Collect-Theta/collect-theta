import React from 'react';
import { Provider } from 'react-redux';

interface Props {
  children?: React.ReactNode;
  store: any;
}

const StoreProvider = ({children, store}: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;
