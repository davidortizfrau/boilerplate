let initState = {
  foo: null
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'COOL':
      return {
        ...state,
        foo: 'bar'
      }
    default:
      return state
  }
}
