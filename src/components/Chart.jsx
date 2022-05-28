import { Bar } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import Loader from './Loader';


const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult.php";

const Chart = () => {
  const [info,setInfo]=useState();
  const [done,setDone]=useState(undefined);
  const fetchChart=async()=>{
    const res=await fetch(API_URL, {mode:'cors'});
    const chartData=await res.json();
    setInfo(chartData);
    setDone(true);
  }
  
  useEffect(()=>{
    fetchChart()
  },[])
  if (!done) return <Loader/>;
  const data = [
    {
      name: '国阵',
      value: info.国阵.win,
    },
    {
      name: '希盟',
      value: info.希盟.win,
    },
    {
      name: '国盟',
      value: info.国盟.win,
    },
    {
      name: 'MUDA',
      value: info.大马民主联合阵线.win,
    },
    
  ];
  const config = {
    data,
    
    height:300,
    padding:50,
    xField: 'value',
    yField: 'name',
    seriesField: 'name',
    colorField: 'type', 
    barWidthRatio: 0.8,
    meta:{
      value:{
        max:222,
        tickCount:4,
        maxLimit:222,
      }
    },
    color: ['#0000ff', '#ea1212', '#003152','black'], 
    legend: {
      position: 'top',
    },
    barBackground: {
      style: {
        fill: '#000',
        fillOpacity: 0.05,
      }
    },
    annotations: [
      {
        type: 'line',
        start:['start',112],
        end:['end',112],
        text:{
          content:'113席 执政',
          autoRotate:false,
          position:'left',
          offsetX:-35,
          offsetY:35,
          style:{
            fontWeight:500, 
            fontSize:15,
          }
        },
        style: {
          stroke: 'red',
        },
      },
      {
        type: 'text',
        position: ['国阵',222],
        content: info.国阵.win,
        style: {
          fontSize:25,
          fill: 'white',
        },
        background: {
          padding: 4,
          style: {
            radius: 4,
            fill: '#0000ff',
          },
        },
      },
      {
        type: 'text',
        position: ['希盟',222],
        content: info.希盟.win,
        style: {
          fontSize:25,
          fill: 'white',
        },
        background: {
          padding: 4,
          style: {
            radius: 4,
            fill: '#ea1212',
          },
        },
      },
      {
        type: 'text',
        position: ['国盟',222],
        content: info.国盟.win,
        style: {
          fontSize:25,
          fill: 'white',
        },
        background: {
          padding: 4,
          style: {
            radius: 4,
            fill: '#003152',
          },
        },
      },
      {
        type: 'text',
        position: ['MUDA',222],
        content: info.大马民主联合阵线.win,
        style: {
          fontSize:25,
          fill: 'white',
        },
        background: {
          padding: 4,
          style: {
            radius: 4,
            fill: 'black',
          },
        },
      },
    ]
    
  };
  return (<Bar {...config} />);
};
export default Chart