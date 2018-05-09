export const filterTodos = (currentFilter, todos) => {
  if (currentFilter === 'COMPL') return todos.filter(t => t.compl === true)
  return todos
}
