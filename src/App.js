import './App.css';
import Main from './components/main';
import Sidebar from './components/sidebar/index';
import Topnav from './components/topnav';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <div id='rightContainer'> 
        <Topnav />
        <Main />
      </div>
     
    </div>
  );
}

export default App;
