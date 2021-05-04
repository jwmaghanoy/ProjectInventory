import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './components/funcComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Product Inventory Form by Reactjs</h1>
       <AddProduct/>
       


        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */} 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!
        </a>
      </header>
    </div>
  );
}

export default App;
