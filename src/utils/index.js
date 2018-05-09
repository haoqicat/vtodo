export const filterTodos = (todos, filter) => {
  console.log('filter-----', filter);

  if (filter === 'COMPL') {
    return todos.filter(t => t.compl === true)
  }
  return todos
}
