
import { Route, Routes } from "react-router";
import Card from "./components/Card";
import CheckOut from "./components/CheckOut";
import Nav from './components/Nav'
import Home from './components/Home';
import Footer from "./components/Footer";



function App() {
 

  return (
    < >
     <Nav/>
     <Routes>
      <Route path={'/'} element={ <Home />} />
      <Route path={'/pedido'} element={<Card />} />
      <Route path={'/checkout'} element={<CheckOut />} />
     </Routes>
    <Footer />
    </>
  );
}

export default App;

