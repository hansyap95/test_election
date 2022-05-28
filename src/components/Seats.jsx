import {Chart} from './';
import { useState,useEffect } from 'react';
import './Home.css';
import { Table } from 'antd';
const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult.php";
const Seats = () => {
  const [allParty,setAllParty]=useState();

  const props = {
    loading: false,
    size: "default",
    footer: ()=>'Header',
    bordered:false,
    pagination:{ position: ['none'] }
  };
  const columns=[
    {
      title:"联盟",
      dataIndex:"party",
      key:'party',
      align:'center',
      render:text=><h4 style={{textAlign:'left',fontWeight:'500'}}>{text}</h4>
    },
    {
      title:"提名",
      dataIndex:"num",
      key:"num",
    },
    {
      title:"中选",
      dataIndex:"win",
      key:"win",
    },
  ]
  
  const data=[
         {
          "party":"国阵",
          "num": 56,
          "win": 40,
          "parties":[
            {
              "巫統": {
                "num": 37,
                "win": 33
              },
              "馬華": {
                "num": 15,
                "win": 4
              },
              "國大黨": {
                "num": 4,
                "win": 3
              }
            }
          ]
        },
         {
          "party":"希盟",
          "num": 50,
          "win": 12,
          "parties":[
            {
              "巫統": {
                "num": 37,
                "win": 33
              },
              "馬華": {
                "num": 15,
                "win": 4
              },
              "國大黨": {
                "num": 4,
                "win": 3
              }
            }
          ]
        },
        { 
          "party": "大马民主联合阵线",
          "num": 7,
          "win": 1,
          "parties":[
            {
              "巫統": {
                "num": 37,
                "win": 33
              },
              "馬華": {
                "num": 15,
                "win": 4
              },
              "國大黨": {
                "num": 4,
                "win": 3
              }
            }
          ]
        } 
  ]
  // const fetchData=async()=>{
  //   const res= await fetch (API_URL);
  //   const data =await res.json();
  //   setAllParty(data);
    
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  // if (!done) return <Loader/>;
  //console.log(data.parties.巫統);
  
  return (
    <> 

      {data.map((item)=><div><h1>{item.num}</h1>
      {item.parties.map((subitem)=><h2>{subitem.巫統.num}</h2>)}
      </div>
      )}
      <div className='chart'>
        <Chart />
      </div>
      <div>
        {/* <Table {...props} columns={columns}  dataSource={data} 
          expandable={{expandedRowRender:record=><p>{record.parties.map((part)=>part.num)}</p>,
          rowExpandable:record=>record.parties
        }}/> */}
      </div>
      <div>
        <h1>Overall map</h1>
      </div>
      <div>
        <h1>国会 </h1>
        <h1>州席</h1>
      </div>
    </>
  )
}
export default Seats