import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
const StateParty = () => {
  const props={
      bordered:false,
      pagination:{ position: ['none'] }
  }
  const col=[
      {
        title:"国会议席",
        dataIndex:"country",
        key:"country",
        align:'center',
        render:text=><Link to={convertState(text)}>{text}</Link>
      },
      {
        title:"国阵",
        dataIndex:"bn",
        key:"bn",
        align:'center',
      },
      {
        title:"希盟",
        dataIndex:"ph",
        key:"ph",
        align:'center',
      },
      {
        title:"国盟",
        dataIndex:"pn",
        key:"pn",
        align:'center',
      },
      {
        title:"MUDA",
        dataIndex:"muda",
        key:"muda",
        align:'center',
      }

  ]

  const col1=[
    {
      title:"州会议席",
      dataIndex:"country",
      key:"country",
      align:'center',
      render:text=><Link to={convertState(text)}>{text}</Link>
    },
    {
      title:"国阵",
      dataIndex:"bn",
      key:"bn",
      align:'center',
    },
    {
      title:"希盟",
      dataIndex:"ph",
      key:"ph",
      align:'center',
    },
    {
      title:"国盟",
      dataIndex:"pn",
      key:"pn",
      align:'center',
    },
    {
      title:"MUDA",
      dataIndex:"muda",
      key:"muda",
      align:'center',
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
      },
      { 
        "id":2,
        "country":"雪兰莪",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      { 
        "id":3,
        "country":"彭亨",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":4,
        "country":"吉打",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":5,
        "country":"柔佛",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":6,
        "country":"吉兰丹",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":7,
        "country":"马六甲",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":8,
        "country":"森美兰",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4,
      },
      {
        "id":9,
        "country":"砂劳越",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4
      },
      {
        "id":10,
        "country":"登嘉楼",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4
      },
      {
        "id":11,
        "country":"沙巴",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4
      },
      {
        "id":12,
        "country":"霹雳",
        "bn":5,
        "ph":1,
        "pn":0,
        "muda":4
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