


export const getLevel = (id) => {
    return async (dispatch) => {
        // console.log('tttttt', id)
        dispatch({ type: 'getLevel', payload: id })
    }
}

