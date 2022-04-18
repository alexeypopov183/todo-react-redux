
export const saveTodo = (text, time) => ({
    type: 'SAVE_TODO',
    text: text,
    time: time,
    id: Date.now()
  })

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const markTodo = (id) => ({
  type: 'MARK_TODO',
  id
})

export const doneTodo = (id) => ({
  type: 'DONE_TODO',
  id
})
