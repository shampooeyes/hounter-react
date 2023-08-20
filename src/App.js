import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from './components/TopSection/TopSection';
import Featured from './components/Featured/Featured';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <TopSection/>
      <Featured/>
    </div>
  );
}

export default App;
