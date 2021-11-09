import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Truong COCO</NavbarBrand>
          </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
