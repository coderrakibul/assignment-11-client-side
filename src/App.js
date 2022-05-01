import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header ';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/home" element={<Home></Home>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;