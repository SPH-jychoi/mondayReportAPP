import LastWeekTable from "./LastWeekTable";
import ThisWeekTable from "./ThisWeekTable";
import { useState,useEffect } from "react";
import * as GlobalContext from "../constant/GlobalContext"
import axios from "axios";


const Report = function(props){
    console.log("report 입니다");
    const [res, setRes] = useState(""); 
    const [itemList, setItemList] = useState(new Array());

    async function getResponse (){
        let response = await axios(GlobalContext.RequestUrl,{
         headers: {
           'Content-Type': 'application/json',
           'Authorization' : GlobalContext.APItoken
          },
          method:`post`,
          data:{ 
           query : `query{
              boards(ids:2092447171) {
                name
                groups(ids: ____59018) {
                  items(limit: 100){
                    name
                    column_values {
                      title
                      text
                      value
                      }
                  }
              }
          }
      }
  `},
       })
  
      let itemList = await response.data.data.boards[0].groups[0];
       setItemList(itemList);
       console.log(`itemList 찍히는 중`);
       console.log(itemList);
      await setRes(JSON.stringify(response.data));
  }



    useEffect(()=>{
        getResponse();  

    },[])  

    return(
        <div class="wrapper">
        <div className="inner-div title-div">
          <div className="inner-div title-div">
            <h1>주간업무보고서</h1>
          </div>
        </div>
        <div className="date-div">
          <h2>
            <p className="report-write-date">
              <span className="date-span"><b>2022</b>년</span>
              <span className="date-span"><b className="date-span">10</b>월</span>
              <span className="date-span"><b className="date-span">3</b>주차</span>
            </p>
          </h2>
        </div>
        <LastWeekTable itemList = {itemList}/>
        <ThisWeekTable/>
      </div>

    )
}
export default Report;