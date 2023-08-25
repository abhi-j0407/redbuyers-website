import './App.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Home from './components/Home/Home.jsx';
import Navbar from './components/General/Navbar/Navbar';
import Footer from './components/General/Footer/Footer';

function App() {

  return (
    <div className="container">
      {/* <Sidebar /> */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
