
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Profile from './components/Profile';
import Skills from './components/Skiles';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
// import Copy from './components/Copy'
import Education from './components/Education';
// import Gif from './components/Gif'



function App() {
  return (
    <div className="App">

  <Profile/>
  <AboutMe/>
  <Skills/> 
  {/* <Gif/> */}

  <Education/>
  <Footer/>   
  {/* <Copy/>      */}
    </div>
  );
}

export default App;
