//import {Layout} from 'antd';
//const {Footer, Content} =Layout;
import {Nav,Home,Seats,Chart,SeatsDetail} from './components';
import {Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Nav/>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/chart" element={<Chart/>}/>
          <Route path="/seats" element={<Seats/>}/>
          <Route path="/seats/:state" element={<SeatsDetail/>}/>
        </Routes>
      </div>
      <div className="footer">
        
      </div>
    </div>
  )
}

export default App