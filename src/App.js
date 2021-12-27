import logo from './logo.svg';
import './App.css';
import Topbar from './Components/topbar/topbar';
import TopPage from './Components/topPage/topPage';
import Tab from './Components/tab/tab';

function App() {
  return (
    <div className="App">
      <Topbar />
      <TopPage />
      <Tab msg="Finance and Insurance" />
    </div>
  );
}

export default App;
