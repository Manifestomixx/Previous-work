
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './components/Home';
import About from './components/About';
import DynamicValues from './components/DynamicValues';
import ClickEvent from './components/ClickEvent';
import UseStateBasics from './components/UseStateBasics';
import List from './components/List';
import ConditionalRendering from './components/ConditionalRendering';
import FetchData from './components/FetchData';
import UseReactForm from './components/UseReactForm';


function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <DynamicValues/>
      <ClickEvent/>
      <About/>
      <UseStateBasics/>
      <List/>
      <ConditionalRendering/>
      <FetchData/>
      <UseReactForm/>
      <Footer/>
    </>
  )
}

export default App
