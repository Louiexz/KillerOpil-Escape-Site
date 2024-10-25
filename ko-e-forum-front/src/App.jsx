import './App.css';
import Header from './components/Header';
import Navbar from './components/navigation/Navigation';
import Footer from './components/Footer';
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <Header src={Logo}/>
      <Navbar/>
      <Footer src={Logo}/>
    </div>
  )
}

export default App
