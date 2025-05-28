import logo from './logo.svg';
import './App.css';
import ProjectsCarousel from "./components/carousselle";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      

        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Portfolio</h1>
        <ProjectsCarousel />
        <p>
          This is a simple portfolio website built with React.
        </p>
    


      </header>
    </div>
  );
}

export default App;
