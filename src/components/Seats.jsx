import {useEffect,useState} from 'react';

const API_URL="https://johor2022.orientaldaily.com.my/widget/getInfo.php";
const Seats = () => {
  const [data,setData]=useState([]);

  const fetchData = async()=>{
    const res =await fetch (API_URL);
    const datas =await res.json();
    setData(datas);
    //console.log(datas);
  }
  useEffect(()=>{
    fetchData();
  },[data])

  const countParty=(party)=>{
    const count = data.filter((partyBN=>partyBN.alliance==party));
    return count.length;
  }
  
  return (
    <div>
       {countParty("國陣")}
       
    </div>
  )
}
export default Seats