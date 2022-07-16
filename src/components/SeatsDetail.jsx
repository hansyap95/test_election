import React,{useEffect,useState,Suspense} from 'react';
import { Collapse ,Button} from 'antd';
import {Chart,Loader,TableState} from './';
import { useParams } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import './Home.css';

const {Panel}=Collapse;
const SeatsDetail = () => {
  const {state}=useParams();
  const [seatCode,setSeatCode]=useState('p');
  const [data,setData]=useState([]);
  const [expandAll,setExpandAll]=useState(true);
  const [done,setDone]=useState(undefined);
  const [seat,setSeat]=useState();


  const fetchData = async(state,seatCode)=>{
    const API_URL=`https://testelec2022.orientaldaily.com.my/seatinfo.php?seat=${state}&code=${seatCode}`;
    const res =await fetch (API_URL);
    const datas =await res.json();
    setData(datas);
    setDone(true);
  }
  
  useEffect(()=>{
    fetchData(state,seatCode)
    loadComponent(state);
    console.log("loading ...")
  },[state,seatCode])
  
  const expandFunctions=()=>{
    setExpandAll(!expandAll);
    if(expandAll===true){
      const arr=[];
      for (let i=0 ;i<data.length;i++){
        arr[i]=i;
      }
      setSeat(arr);
      
    }else{
      setSeat([]);
    }
  }

  const convertName = (state) => {
    switch (state) {
      case "johor":
        state = "柔佛";
        return state;
        
      case "kedah":
        state = "吉打";
        return state;
        
      case "penang":
        state = "槟城";
        return state;
        
      case "kelantan":
        state = "吉兰丹";
        return state;

      case "melaka":
        state = "马六甲";
        return state;
        
      case "negerisembilan":
        state = "森美兰";
        return state;
        
      case "selangor":
        state = "雪蘭莪";
        return state;
        
      case "sabah":
        state = "沙巴";
        return state;
        
      case "terengganu":
        state = "登嘉楼";
        return state;
        
      case "sarawak":
        state = "砂劳越";
        return state;
        
      case "perlis":
        state = "玻璃市";
        return state;
        
      case "perak":
        state = "霹雳";
        return state;
        
      case "pahang":
        state = "彭亨";
        return state;
        
      case "kl":
        state = "吉隆坡联邦直辖区";
        return state;
        
      default:
        state = "全国";
        return state;
        
    }
  };
  const parlimentStateFunction=(e)=>{
    setSeatCode(e.currentTarget.value);
    setSeat([]);  
    setExpandAll(true);
  }
  
  function loadComponent(name){
    const Component=React.lazy(()=>
       import (`../map/${name}`)
    );
    return Component
  }
  //const OtherComponent = React.lazy(() => import('./OtherComponent'));
  const Component=loadComponent(state)

  if (!done) return <Loader/>;

  return (
    <> 
      <div className='title_seat'>
         <h1 className='title'>{convertName(state)}</h1>
      </div>
      <div className='button_expand'>
        <Button type="primary" value="p" danger size='large' onClick={parlimentStateFunction} style={{marginRight:'10px'}}>国会议席</Button>
        {state!=='johor' && state!=='kl'  && state!=='melaka'  && state!=='sarawak'  && state!=='sabah' &&<Button type="primary" value="n" danger size='large' onClick={parlimentStateFunction}>州议席</Button>}
      </div>
      <div className='chart'>
        <Chart />
      </div>
      <div className='table_party'>
        <TableState/>
      </div>
      <div className='seat_map'>
        <h1 >{convertName(state)+"-地图"}</h1>
        <div className='map'>
          <Suspense fallback={<Loader/>}>
           <Component code={seatCode} />
 
          </Suspense>
        </div>
      </div>
      <div className='button_expand'>
        <Button type="primary"  style={{backgroundColor:'grey',borderRadius:'10px',borderColor:'white'}} onClick={expandFunctions}>{expandAll ? '显示全部 ' : '隐藏全部'} </Button>
      </div>
      <div className='seat_info'>
          {data.map((cand,index)=>(
             <Collapse activeKey={seat} onChange={setSeat} key={index} className='collapse_seat' >
               <Panel className='panel_seat' header={cand.seatname +"  "+ cand.ednamec +" "+ cand.edname} key={index} >
                 {HTMLReactParser(cand.electorate+cand.reg_percent+cand.last_result+cand.total_votes+cand.majority+cand.candidate)}
               </Panel>
             </Collapse>
           ))}
      </div>
    </>
  )
}
export default SeatsDetail