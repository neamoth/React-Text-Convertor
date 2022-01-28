import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import './App.css';
function App() {
  return (
    <>
    <Navbar logoTitle="Conveter"/>
    <div className="container">
      <TextFrom heading="Enter your text here"/>
    </div>
    </>
  );
}

export default App;
