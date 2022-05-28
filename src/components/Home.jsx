import React, { useEffect,useState } from 'react';
import {Card,Row,Typography,Button,Tag} from 'antd';
import './Home.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Loader from './Loader';
import {Chart,Ad1,Ad2,Ad3} from './';
import ErrorImage from '../img/og-image.jpg'

moment().locale('zh-cn')
const API_URL="https://testelec2022.orientaldaily.com.my/articleAPI.php";
const {Text,Title}=Typography;

const Home = () => {
  const [article,setArticle]=useState([]);
  const [load,setLoad]=useState(25);
  const [done,setDone]=useState(undefined);
  const replaceErrorImg=e=>{
    e.target.onerror=null;
    e.target.src=ErrorImage;
  }
 
  
  const fetchData=async()=>{
      const res=await fetch(API_URL, {mode:'cors'});
      const data=await res.json();
      setArticle(data);
      setDone(true);
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  
  
  if (!done) return <Loader/>;
  return (
    <>
   
    <div className='chart'>
      <Chart />
    </div>
    <div className="home-page">
          {article.slice(0,load).map((art,index)=>(
            <Row key={index}  >
              
              {index===7 && <Ad1/>}
              {index===14 && <Ad2/>}
              {index===21 && <Ad3/>}
              
                <Card hoverable className="article-news">
                <a href={art.url} target="_blank" rel="noreferrer">
                  <div className="news-image-container">
                      <div className='news-image'>
                        <img src={art.picurl} alt={art.id} onError={replaceErrorImg}/>
                      </div>
                      <div className='article-text'>
                        <Title className='news-title' level={5}>{art.title}</Title>
                        <Text className='news-date'>{moment(art.date).fromNow()}</Text>
                        {art.pinnews && (<Tag className="pin-news"color="red" style={{marginLeft:"1em"}}>热闻</Tag>)}
                        <Text className='news-text' style={{marginTop:'1em'}}>{art.description.length>100 ? `${art.description.substring(0,150)}...` : art.description}</Text>
                      </div>
                  </div>
                </a>
                </Card>
            </Row>
            )
            )
          }

    </div>
    <div className='load-page'>
      <Button className='load-button' type="primary" style={{marginBottom:'3em',backgroundColor:'#cb0c13',borderColor:'#cb0c13',height:'auto',fontSize:'15px',padding:'14px 50px'}}onClick={()=>setLoad((preLoad)=>preLoad+10)}>更多文章</Button>
    </div>
    </>
  )
}
export default Home 