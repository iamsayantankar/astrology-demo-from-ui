import './App.css'
import { BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import NavbarComponent from './Components/Navbar'
import Footer from './Components/Footer'
import Post from './Pages/Post'
import BlogSection from './Pages/Blog'
import Soul_Services from './Pages/Soul_Services'
import Soul_Vip from './Pages/Vip'

function App() {

  return (  
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/blog" element={<BlogSection/>}/>
        <Route path="/soul-services" element={<Soul_Services/>}/>
        <Route path="/vip" element={<Soul_Vip/>}/>
        <Route to="/*" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}


export default App
