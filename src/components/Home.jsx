import React, { useEffect,useState } from 'react';
import {Card,Col,Row} from 'antd';
import './Home.css';
import ErrorImage from '../img/og-image.jpg'
const API_URL="https://johor2022.orientaldaily.com.my/func333/articleAPI.php";

const Home = () => {
  const [article,setArticle]=useState([]);

  // const articleStyle={
  //   width:'50%',
  // };
  const replaceErrorImg=e=>{
    e.target.onerror=null;
    e.target.src=ErrorImage;
  }
  const fetchData=async()=>{
      const res=await fetch(API_URL);
      const data=await res.json();
      setArticle(data);
      console.log(data);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="home-page">
      
        
          {article.map((art=>(
            <a href={art.url} target="_blank">
            <Row style={{justifyContent:'center'}}>
            <Col span={24} >
            <div className="article-container" >
              <div key={art.id}>
                <img style={{maxWidth:'200px',maxHeight:'200px'}}src={art.picurl} alt={art.id} onError={replaceErrorImg}/>
              </div>
              <div>
                <Card title={art.title}>
                  {art.description.length>100 ? `${art.description.substring(0,150)}...` : art.description}
                 </Card>
              </div>
            </div>
            </Col>
            </Row>
            </a>
          )))}
          
        
      
        
      
    </div>
  )
}

export default Home 