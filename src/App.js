import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { ProductList } from "./components/productList/ProductList";
//import { ThemeContext } from "./context/context";
import {useState} from 'react'
import Nav from "./components/Nav/Nav.jsx";


function App() {
  const [dark, setDark] = useState(true)

  return (
    <div style={{background: dark ? '#222' : '#fff', color: dark && '#fff'}}   className={dark ? 'dark' : ''}> 
      <Nav  setDark={setDark} dark={dark}/>
      <Intro dark={dark} />
      <About dark={dark} />
      <ProductList />
      <Contact dark={dark} />
    </div>
  );
}

export default App;
