const initialState = {}

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case 'first':
    return { ...state, ...payload }

  default:
    return state
  }
}


 
