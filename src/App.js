import logo from './logo.svg';
import './App.css';
import Add from './add-list/add';
import View from './add-list/View';
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
   <>
    <Provider store={store}>
         <Add/>
   <View/>
    </Provider>

   </>
  );
}

export default App;
