import Mock from 'mockjs'

const List = []
const count = 30

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    // "id|":"@increment",
    // "date":"@date",
    // "newsType|1":[{id:1,typeName:'时政新闻'},{id:2,typeName:'财经新闻'},{id:3,typeName:'时事热点'}],
    // "title":"@ctitle",
    // "content":"@cparagraph",
    // "read":"@integer(20,300)"
    "id|":"@increment",
    "meetingName":"@ctitle",
    "meetingPosition":"@ctitle",
    "peopleNum|20-200":200,
    "ifMore|1":true,
    "ifOpen|1":true
  }))
}

export default [
  {
    url: '/meeting/list',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: {
          total: List.length,
          items: List
        }
      }
    }
  },
  // {
  //   url: '/news/update',
  //   type: 'post',
  //   response: _ => {
  //     return {
  //       code: 20000,
  //       data: 'success'
  //     }
  //   }
  // },
  // {
  //   url: '/news/create',
  //   type: 'post',
  //   response: _ => {
  //     return {
  //       code: 20000,
  //       data: 'success'
  //     }
  //   }
  // },

]
