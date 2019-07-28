
const selection = {
    selectedView: 'No'
}
const SelectionViewReducer = (state = selection, action) => {

    switch (action.type) {
        
        case 'selectionView':
         //console.log(action.location)
        return {...state,selectedView:action.location }

        default:
                
        return state
    }
}


export default SelectionViewReducer;