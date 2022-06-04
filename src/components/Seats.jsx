import {Chart} from './';
import { useState,useEffect } from 'react';
import './Home.css';
import { Table } from 'antd';
const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult1.php";
const Seats = () => {
  const [allParty,setAllParty]=useState();
  const props = {
    loading: false,
    size: "default",
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

  const expandedRowRender=()=>{
    // const columns=[
    //   { 
    //     title:"党",
    //     dataIndex:['parties'],
    //     key:'key ',
    //     align:'center',
    //     render:item=>item.map((items)=>items.partys)
    //   },
    //   {
    //     title:"提名",
    //     dataIndex:'party',
    //     key:"nums",
    //   },
    //   {
    //     title:"中选",
    //     dataIndex:'party',
    //     key:"wins",
    //   },
    // ]
    // return <Table columns={columns} dataSource={allParty} rowKey='key' pagination={false}/>
    return(
      <div>

        {allParty.map((item)=><div>{item.parties.map((subitem,key)=><h2>{subitem.partys}</h2>)}</div>)}
      </div>
    )
  }

  
  const fetchData=async()=>{
    const res= await fetch (API_URL);
    const data =await res.json();
    setAllParty(data);
    
  }
  useEffect(()=>{
    fetchData();
  },[])
  // if (!done) return <Loader/>;


  //console.log(allParty);
  return (
    <> 

      {/* {allParty.map((item)=><div>{item.parties.map((subitem,key)=><h2>{subitem.partys}</h2>)}</div>)} */}
      <div className='chart'>
        <Chart />
      </div>
      <div>
        <Table {...props} columns={columns}  dataSource={allParty} expandable={{expandedRowRender}}/>
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