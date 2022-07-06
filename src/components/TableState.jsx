import { Table } from 'antd';
import React,{useEffect,useState} from 'react'

const API_URL="https://testelec2022.orientaldaily.com.my/allPartyResult1.php";

const TableState = () => {
    const [allParty,setAllParty]=useState();

    const props = {
        loading: false,
        tableLayout:'fixed',
        size: "middle",
        pagination:{ position: ['none'] },
      };


      const columns=[
        {
          
          dataIndex:["icon"],
          key:'party',
          align:'right',
          render:icon=><img src={icon} alt="icon" style={{width:'25px',height:'25px'}} />
        },
        {
          title:<p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>联盟</p>,
          dataIndex:["party"],
          key:'party',
          align:'left',
          render:text=><p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>{text}</p>
        },
        {
          title:<p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>提名</p>,
          dataIndex:"num",
          key:"num",
          align:'center',
          width:'30%',
          render:text=><p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>{text}</p>
        },
        {
          title:<p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>中选</p>,
          dataIndex:"win",
          key:"win",
          align:'center',
          width:'30%',
          render:text=><p style={{fontSize:'16px',fontWeight:'600',margin:'auto'}}>{text}</p>

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
        <Table {...props}  columns={columns}  rowKey="key" dataSource={allParty} expandable={{expandedRowRender:(record)=> record.parties.map((subitem,index)=>(
          
            <table key={index} className="tableParty" >
              <tbody >
                <tr  className="party_rows" key={index}>
                  <td className="td_party " style={{width:'40%',height:'50px',textAlign:'left',paddingLeft:'10px'}}>
                    <img src={subitem.icon} alt="icon" style={{width:'25px',height:'25px',marginRight:'10px'}} />{subitem.partys}
                    <img src="https://testelec2022.orientaldaily.com.my/icon/Arrow_03%20copy.png" alt="logo-direction" style={{width:'10px' ,height:'19px',marginRight:'-6px',float:'right',marginTop:'7px'}} />
                  </td>
                  <td className="td_party"> {!subitem.nums ? 0 : subitem.nums} </td>
                  <td className="td_party" style={{paddingLeft:'37px'}}>{!subitem.wins ? 0: subitem.wins}</td>
                </tr>
              </tbody>
            </table>
          )) }}/>
      </div>
  )
}

export default TableState
    
    
    