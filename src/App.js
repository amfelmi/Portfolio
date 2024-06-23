import './App.scss'
import Layout from './Components/Layout/index'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import About from './Components/Home/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {

  const isMobile = window.innerWidth <= 767;
  return (
    <div className='app'>
      {!isMobile && <Layout />}
      {!isMobile && <Sidebar />}
      <Home />
      {isMobile && <About />}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
