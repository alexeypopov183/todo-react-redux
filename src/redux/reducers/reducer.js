export function reducer (state = [], action) {

  switch (action.type) {
    case 'SAVE_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          time: action.time,
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

    default:
      return state
  }
}