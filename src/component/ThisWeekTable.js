import * as GlobalContext from "../constant/GlobalContext"
import { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

const ThisWeekTable = () => {

    const [itemList, setItemList] = useState(new Array());

    async function getResponse() {
        let response = await axios(GlobalContext.RequestUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': GlobalContext.APItoken
            },
            method: `post`,
            data: {
                query: `query{
              boards(ids:2092447171) {
                name
                groups(ids: new_group99724) {
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
        await setItemList(itemList);
    }

        useEffect(() => {
            getResponse();

        }, [])



        return (<div className="table-div">
            <table className="tg" style={{ tableLayout: 'fixed', width: '100%' }}>
                <colgroup>
                    <col style={{ width: "141px" }} />
                    <col style={{ width: "96px" }} />
                    <col style={{ width: "126px" }} />
                    <col style={{ width: "80px" }} />
                    <col style={{ width: "129px" }} />
                    <col style={{ width: "130px" }} />
                </colgroup>
                <tbody>
                    <tr>
                        <h3>금주 진행 계획</h3>
                    </tr>
                    <tr>
                        <td className="tg-83nw">업무명</td>
                        <td className="tg-83nw">사람</td>
                        <td className="tg-83nw">업무내용</td>
                        <td className="tg-83nw">진행 사항</td>
                        <td className="tg-83nw">시작일 - 완료일</td>
                        <td className="tg-83nw">비고</td>
                    </tr>
                    {(itemList.length == 0) ? "" : itemList.items.map(item => <tr>
                        <td className="tg-p6v9">{item.name}</td>
                        <td className="tg-p6v9">{item.column_values[1].text}</td>
                        <td className="tg-ur59">{item.name}</td>
                        <td className="tg-p6v9">{item.column_values[4].text}</td>
                        <td className="tg-p6v9">{item.column_values[6].text}</td>
                        <td className="tg-ur59">{ }</td>
                    </tr>)}
                </tbody>
            </table>
        </div>)
    
}
export default ThisWeekTable;