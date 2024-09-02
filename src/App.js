import { Routes,Route} from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';
import Iphone12 from './Pages/Iphone12'
import Iphone13 from './Pages/Iphone13';
import Iphone14 from './Pages/Iphone14';
import Iphone15 from './Pages/Iphone15';


function App() {
  return (

   <section >
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Iphone12" element={<Iphone12 />} />
      <Route path="/Iphone13" element={<Iphone13 />} />
      <Route path="/Iphone14" element={<Iphone14 />} />
      <Route path="/Iphone15" element={<Iphone15 />} />
    </Routes>
   </section>
    
  );
}

export default App;
