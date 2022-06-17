import {Chart,TableState} from './';
//import { useState,useEffect } from 'react';
import './Home.css';
import Johor  from '../map/johor.jsx';

import StateParty from './StateParty';

const Seats = () => {
  
  // if (!done) return <Loader/>;
  return (
    <> 
    
      {/* {allParty.map((item)=><div>{item.parties.map((subitem,key)=><h2>{subitem.partys}</h2>)}</div>)} */}
      <div className='chart'>
        <Chart />
      </div>
      <div className='table_party'>
        <TableState/>
      </div>
      <div className='seat_map' >
        <h1>全国大选地图</h1>
        <div className='map'>
          <Johor/>
        </div>
      </div>
      <div className='table_party' style={{textAlign:'center'}}>
        <StateParty/>
      </div>  
    </>
  )
}
export default Seats