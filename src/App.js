
import './App.css';
import Main from './components/mainComponent';
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configStore'

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
    )
  }
}

export default App;
