import logo from './logo.svg';
import './App.css';
import Topbar from './Components/topbar/topbar';
import TopPage from './Components/topPage/topPage';
import Tab from './Components/tab/tab';
import Bottom from './Components/bottom/bottom';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <TopPage />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
