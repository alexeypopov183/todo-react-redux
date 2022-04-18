export function reducer (state = [], action) {

  switch (action.type) {
    case 'SAVE_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false,
          mark: false,
        }
      ]

    case 'DELETE_TODO':
      return state.filter(el => action.id !== el.id);

    case 'MARK_TODO':
      return state.map(el => {
        if (action.id === el.id) {
          el.mark = !el.mark
        }
        return el;
      })

    case 'DONE_TODO':
      return state.map(el => {
        if (action.id === el.id) {
          el.done = !el.done
        }
        return el;
      })

    default:
      return state
  }
}