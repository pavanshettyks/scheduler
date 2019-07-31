import initialState from './initialState'
import init_user from './initialUserDetails'
//import { Monday } from '../Components/Monday';
//import uuid from 'uuid';


const MainReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'changeAssignment':
        console.log(state)
        const user = action.data.user;
        const day = action.data.day;
        const time = action.data.time;
        const interval = action.data.interval;
        const newCountPerDay =  action.data.CountPerDay
        //const change = state[user][day][time][interval];
        const isAssigned = action.data.assigned;
        const location = action.data.location;
        //console.log(action.data)
        //console.log(state[user][day]['hrs'][time][interval]);
        const user1 = {
           // [user] : {
                ...state[user],
                [day]:{
                     ...state[user][day],
                     CountPerDay: newCountPerDay,
                     hrs:{
                        ...state[user][day]['hrs'],
                                    [time]:{
                                        ...state[user][day]['hrs'][time],
                                         [interval]:{
                                          ...state[user][day]['hrs'][time][interval],
                                          isAssigned: isAssigned,
                                          location: location,
                                        }
                                    }
                    }
                }
           // }
        }
       
        return {  ...state,[user]:user1}
    
    case 'Add_User':

        return {...state,[action.user]:init_user, userList:[...state.userList,action.user]}
    default:
        return state
    }
}


export default MainReducer;