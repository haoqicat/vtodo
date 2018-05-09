const state = {
  all: [
    {
      id: '1',
      body: '遛狗',
      compl: false
    },
    {
      id: '2',
      body: '吃饭',
      compl: true
    },
    {
      id: '3',
      body: '再次吃饭',
      compl: false
    }
  ]
}

const mutations = {
  addTodo(state, todo) {
    state.all.push(todo)
  }
}

export default {
  mutations,
  state
}
