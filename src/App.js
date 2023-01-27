import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Card from './Components/Card';
import Navbar from './Components/Navbar';

function App() {
  const elem = Data.map(item => {
    return(
      <Card id={item.imageUrl} 
      {...item}/>
    )
  })
  return (
    <div className="App">
      <Navbar/>
      {elem}
    </div>
  );
}

export default App;
