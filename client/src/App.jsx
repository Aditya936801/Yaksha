import './App.css';
import store from './dataLayer/store';
import { persistor } from './dataLayer/store/store';
import Layout from './layout';
import Inventory from './screens/Inventory';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <ReduxProvider store={store}>
      <ReduxPersistGate loading={null} persistor={persistor}>
        <Layout>
          <Inventory />
        </Layout>
      </ReduxPersistGate>
    </ReduxProvider>
  );
}

export default App;
