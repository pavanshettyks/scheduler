
const UIControls = {
    ShowAddUser: false,
    Filter_Event_Name:'',
    Filter_UID:'',
    Filter_Location:'',
    Filter_Staff:'',
}
const UIReducer = (state = UIControls, action) => {

    switch (action.type) {
        
        case 'AddUser':
         //console.log(action.location)
        return {...state,ShowAddUser:!state.ShowAddUser }

        case 'FilterValue':
           // console.log(action)
                return {...state,[action.target]:action.value}

        default:
                
        return state
    }
}


export default UIReducer;