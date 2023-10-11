import './App.scss'
import Layout from './Components/Layout/index'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className='app'>
      <Layout />
      <Sidebar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
