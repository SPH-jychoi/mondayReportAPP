const GroupsQuery = (boardId)=>{
    console.log(`그룹 쿼리 날리기`);

    return(
        `query {
          boards (ids: ${boardId}) {
              groups {
                  id
                  title
              }
          }
      }`
    )
};

export default GroupsQuery