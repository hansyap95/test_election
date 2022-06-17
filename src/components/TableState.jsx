import { Table } from 'antd';
import React,{useEffect,useState} from 'react'
import {BsArrowReturnRight} from 'react-icons/bs'
const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult1.php";

const TableState = () => {
    const [allParty,setAllParty]=useState();

    const props = {
        loading: false,
        tableLayout:'fixed',
        size: "middle",
        bordered:true,
        pagination:{ position: ['none'] }
      };
      const columns=[
        {
          title:"联盟",
          dataIndex:"party",
          key:'party',
          align:'center',
          // render:text=><h4 style={{textAlign:'left',fontWeight:'500'}}>{text}</h4>
        },
        {
          title:"提名",
          dataIndex:"num",
          key:"num",
          align:'center',
        },
        {
          title:"中选",
          dataIndex:"win",
          key:"win",
          align:'center',
        },
      ]

    const fetchTableData=async()=>{
        const res= await fetch (API_URL);
        const data =await res.json();
        setAllParty(data);
        
      }
    
      useEffect(()=>{
        fetchTableData();  
      },[])

  return (
    <div>
        <Table {...props} columns={columns}  rowKey="key" dataSource={allParty} expandable={{expandedRowRender:(record)=> record.parties.map((subitem,index)=>(
          
            <table key={index} className="tableParty" >
              <tbody >
                <tr  className="party_rows" key={index}>
                  <td className="td_party">{subitem.partys}</td>
                  <td className="td_party"><BsArrowReturnRight/>{!subitem.nums ? 0 : subitem.nums}</td>
                  <td className="td_party"><BsArrowReturnRight/>{!subitem.wins ? 0: subitem.wins}</td>
                </tr>
              </tbody>
            </table>
          )) }}/>
      </div>
  )
}
export default TableState
    
    
    