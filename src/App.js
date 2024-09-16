import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title= "UpHer" home = "HomePage" aboutText ="About UpHer" />
    <div className="container my-3">
    <TextForm heading="Enter lowercase text "/>
    </div>
    </>
  );
}

export default App;
