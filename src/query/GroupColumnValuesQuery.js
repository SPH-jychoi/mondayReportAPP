 const GroupColumnValuesQuery = (obj)=>{
    console.log(`일단 지금 쿼리는 날라간다?`);

    return(
        `query{
            boards(ids: ${obj.BoardId}) {
              name
              groups(ids: ${obj.GroupId}) {
                items(limit: ${obj.ItemLimit}){
                  name
                  column_values {
                    text
                    type
                    title
                    value
                        }
                }
              }
            }
          }`
        )
};

export default GroupColumnValuesQuery