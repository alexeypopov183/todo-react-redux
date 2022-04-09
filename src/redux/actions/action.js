let uniqId = 0;

export const saveTodo = (text) => ({
    type: 'SAVE_TODO',
    text: text,
    id: uniqId++
  })

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const markTodo = (id) => ({
  type: 'MARK_TODO',
  id
})
