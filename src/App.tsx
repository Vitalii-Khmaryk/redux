// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ObjectList from './pages/ObjectList';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Object List</h1>
        <ObjectList />
        
      </div>
    </Provider>
  );
};

export default App;
