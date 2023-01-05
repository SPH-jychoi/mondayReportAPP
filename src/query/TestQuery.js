
const TestQuery =`query{
            boards(ids:2092447171) {
              name
              groups(ids: ____59018) {
                items(limit: 100){
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
    }
`

export default TestQuery