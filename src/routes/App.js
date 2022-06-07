import "../assets/css/styles.css"
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/carrito" element={<Carrito />}></Route>
          <Route exact path="/producto/" element={<Producto />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
