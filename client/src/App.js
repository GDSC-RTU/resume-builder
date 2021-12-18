import './App.css';
import Experience from './components/personalDetails';
function App() {
  return (
    <div className="App">
        <Experience>
          key={Experience.id}
          name={Experience.name}
        </Experience>
    </div>
  );
}

export default App;
