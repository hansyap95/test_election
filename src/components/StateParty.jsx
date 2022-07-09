import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const StateParty = () => {
  const props={
      bordered:false,
      pagination:{ position: ['none'] },
      
  }

  const col=[
      {
        title:<p style={{textAlign:'center',fontWeight:'600',margin:'auto'}}>国会议席</p>,
        dataIndex:"country",
        key:"country",
        align:'left',
        width:'20%',
        render:(text,record)=><Link to={convertState(text)}><img src={record.icon} alt="icon" style={{width:'25px',height:'25px',marginRight:'5px'}} />{text}</Link>
      },
      {
        title:<p style={{fontWeight:'600',margin:'auto'}}>国阵</p>,
        dataIndex:"bn",
        key:"bn",
        align:'center',
        width:'15%',
      },
      {
        title:<p style={{fontWeight:'600',margin:'auto'}}>希盟</p>,
        dataIndex:"ph",
        key:"ph",
        align:'center',
        width:'10%',
      },
      {
        title:<p style={{fontWeight:'600',margin:'auto'}}>国盟</p>,
        dataIndex:"pn",
        key:"pn",
        align:'center',
        width:'10%',
      },
      {
        title:<p style={{fontWeight:'600',margin:'auto'}}>斗士</p>,
        dataIndex:"muda",
        key:"muda",
        align:'center',
        width:'10%',
      }

  ]

  const col1=[
    {
      title:<p style={{textAlign:'center',fontWeight:'600',margin:'auto'}}>国会议席</p>,
      dataIndex:"country",
      key:"country",
      align:'left',
      width:'20%',
      render:(text,record)=><Link to={convertState(text)}><img src={record.icon} alt="icon" style={{width:'25px',height:'25px',marginRight:'5px'}} />{text}</Link>
    },
    {
      title:<p style={{fontWeight:'600',margin:'auto'}}>国阵</p>,
      dataIndex:"bn",
      key:"bn",
      align:'center',
      width:'15%',
    },
    {
      title:<p style={{fontWeight:'600',margin:'auto'}}>希盟</p>,
      dataIndex:"ph",
      key:"ph",
      align:'center',
      width:'10%',
    },
    {
      title:<p style={{fontWeight:'600',margin:'auto'}}>国盟</p>,
      dataIndex:"pn",
      key:"pn",
      align:'center',
      width:'10%',
    },
    {
      title:<p style={{fontWeight:'600',margin:'auto'}}>斗士</p>,
      dataIndex:"muda",
      key:"muda",
      align:'center',
      width:'10%',
    }

]
  const data=[
      {   
          "id":1,
          "country":"吉隆坡",
          "bn":1,
          "ph":2,
          "pn":3,
          "muda":4,
          "icon":'https://testelec2022.orientaldaily.com.my/flag/wilayah.png'
      },
      { 
        "id":2,
        "country":"雪兰莪",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/selangor.png'
      },
      { 
        "id":3,
        "country":"彭亨",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/pahang.png'
      },
      {
        "id":4,
        "country":"吉打",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/kedah.png'
      },
      {
        "id":5,
        "country":"柔佛",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/johor.png'
      },
      {
        "id":6,
        "country":"吉兰丹",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/kelantan.png'
      },
      {
        "id":7,
        "country":"马六甲",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/melaka.png'
      },
      {
        "id":8,
        "country":"森美兰",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/sembilan.png'
      },
      {
        "id":9,
        "country":"砂劳越",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/sarawak.png'
      },
      {
        "id":10,
        "country":"登嘉楼",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/terengganu.png'
      },
      {
        "id":11,
        "country":"沙巴",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/sabah.png'
      },
      {
        "id":12,
        "country":"霹雳",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
        "icon":'https://testelec2022.orientaldaily.com.my/flag/perlis.png'
      }
  ]
  const convertState=(state)=>{
    switch (state) {
        case "吉隆坡":
            state='./wp';
            return state;
        case "彭亨":
            state='./pahang';
            return state;
        case "霹雳":
            state='./perak';
            return state;
        case "玻璃市":
            state='./perlis';
            return state;
        case "砂劳越":
            state='./sarawak';
            return state;
        case "登嘉楼":
            state='./terengganu';
            return state;
        case "沙巴":
            state='./sabah';
            return state;
        case "雪兰莪":
            state='./selangor';
            return state;
        case "马六甲":
            state='./melaka';
            return state;
        case "森美兰":
            state='./negerisembilan';
            return state;
        case "吉兰丹":
            state='./kelantan';
            return state;
        case "槟城":
            state='./penang';
            return state;
        case "吉打":
            state='./kedah';
            return state;
        case "柔佛":
            state='./johor';
            return state;
        default :
            state='./';
            return state;
    }
  }
  return (
      <>
      <div>
        <Table {...props} className="state_party1" dataSource={data} columns={col} rowKey="id"/>
        <Table {...props} className="state_party2" dataSource={data} columns={col1} rowKey="id"/>
      </div>

      </>
    
  )
}

export default StateParty