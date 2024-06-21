import { Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Red from './Red'
import Blue from './Blue'
import Home from './Home'
import Green from './Green'
import Purple from './Purple'

function App() {

  return (

    <div id="container">

      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/green">Green</Link>
        <Link to="/purple">Purple</Link>
        <Link to="/">Home</Link>


      </div>
      
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue/>}></Route>
          <Route path="/red" element={<Red/>}></Route>
          <Route path="/green" element={<Green/>}></Route>
          <Route path="/purple" element={<Purple/>}></Route>
          <Route path="/" element={<Home/>}></Route>

        </Routes>
        
      </div>

    </div>


  )
}

export default App
