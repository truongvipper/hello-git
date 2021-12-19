
import Main from './components/mainComponent';
import './App.css';
import { render } from 'react-dom';
import { Component } from 'react';
import { Detail } from '../src/components/DishDetailComponent'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'
const store=ConfigureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
        <div>
          <Main></Main>
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
