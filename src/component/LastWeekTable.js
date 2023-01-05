import { useState } from "react"
import { useEffect } from "react"

const LastWeekTable = (props)=>{
    console.log("이전 주 테이블 가져오기")
    console.log(props)
    console.log(props.itemList);



    return( <div className="table-div">

    <table className="tg" style={{tableLayout:'fixed', width: '100%'}}>
    <colgroup>
    <col style={{width: "141px"}}/>
    <col style={{width: "96px"}}/>
    <col style={{width: "126px"}}/>
    <col style={{width: "80px"}}/>
    <col style={{width: "129px"}}/>
    <col style={{width: "130px"}}/>
    </colgroup>
    <tbody>
          <tr>
              <h3>전주 실적</h3>
          </tr>
          <tr>
              <td className="tg-83nw">업무명</td>
              <td className="tg-83nw">사람</td>
              <td className="tg-83nw">업무내용</td>
              <td className="tg-83nw">진행 사항</td>
              <td className="tg-83nw">시작일 - 완료일</td>
              <td className="tg-83nw">비고</td>
          </tr>
          {(props.itemList.length==0)?"":props.itemList.items.map(item =><tr>
            <td className="tg-p6v9">{item.name}</td>
            <td className="tg-p6v9">{item.column_values[1].text}</td>
            <td className="tg-ur59">{item.name}</td>
            <td className="tg-p6v9">{item.column_values[4].text}</td>
            <td className="tg-p6v9">{item.column_values[6].text}</td>
            <td className="tg-ur59">{}</td>
        </tr>)}
      </tbody>
    </table>
  </div>)
}

export default LastWeekTable;