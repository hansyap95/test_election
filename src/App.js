//import {Layout} from 'antd';
//const {Footer, Content} =Layout;
import {Nav,Home,Seats} from './components';
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
          <Route path="/seats" element={<Seats/>}/>
        </Routes>
      </div>
      <div className="footer">
        
      </div>
    </div>
  )
}

export default App