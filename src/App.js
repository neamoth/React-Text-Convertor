import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import './App.css';
import Alart from './components/Alart';
import { useState } from 'react';
// import About from './components/About';
function App() {
  const [alart, setAlart] = useState(null);

  const  showAlart = (massage, type)=>{
    setAlart({
      massage: massage,
      type: type
    })
  }
  setTimeout(() => {
    setAlart(null);
  }, 1500);
  return (
    <>
    <Navbar logoTitle="Conveter"/>
    <Alart alart={alart}/>
    <div className="container">
      <TextFrom showAlart={showAlart} heading="Enter your text here"/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
