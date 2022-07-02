import { Table } from 'antd';
import React,{useEffect,useState} from 'react'

const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult1.php";

const TableState = () => {
    const [allParty,setAllParty]=useState();

    const props = {
        loading: false,
        tableLayout:'fixed',
        size: "middle",
        
        pagination:{ position: ['none'] }
      };
      const columns=[
        {
          
          dataIndex:["icon"],
          key:'party',
          align:'right',
          render:icon=><img src={icon} alt="icon" style={{width:'25px',height:'25px'}} />
        },
        {
          title:"联盟",
          dataIndex:["party"],
          key:'party',
          width:'40%',
          align:'left',
          render:text=><h3>{text}</h3>
        },
        {
          title:"提名",
          dataIndex:"num",
          key:"num",
          align:'center',
          render:num=><h3>{num}</h3>
        },
        {
          title:"中选",
          dataIndex:"win",
          key:"win",
          align:'center',
          render:num=><h3>{num}</h3>
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
        <Table {...props} columns={columns}  rowKey="key" dataSource={allParty} style={{backgroundColor:'black'}} expandable={{expandedRowRender:(record)=> record.parties.map((subitem,index)=>(
          
            <table key={index} className="tableParty" >
              <tbody >
                <tr  className="party_rows" key={index}>
                  <td className="td_party " style={{width:'70%',height:'50px',paddingLeft:'7em'}}>
                    <img src={subitem.icon} alt="icon" style={{width:'25px',height:'25px',marginRight:'10px'}} />{subitem.partys}
                    <img src="https://testelec2022.orientaldaily.com.my/icon/Arrow_03%20copy.png" alt="logo-direction" style={{width:'24px' ,height:'28px',marginRight:'1em',float:'right'}} />
                  </td>
                  <td className="td_party">
                    {!subitem.nums ? 0 : subitem.nums}
                    </td>
                  <td className="td_party">{!subitem.wins ? 0: subitem.wins}</td>
                </tr>
              </tbody>
            </table>
          )) }}/>
      </div>
  )
}

export default TableState
    
    
    