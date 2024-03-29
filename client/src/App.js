import { Provider } from 'react-redux'
import './App.css';
import { AppRouter } from './routes/AppRouter';
import { store } from './store/store';


export const App = () => {
  return (
   <Provider store={store}>
   <AppRouter />
   </Provider>
  );
}

