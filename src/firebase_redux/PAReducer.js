
const PAData = [ 
        {
            Event_Name:"RAISE Transfer Program Orientation",
            UID:"4183",
            Event_Date:"7/30/2019",
            Location:"TSU",
            Time:"8 AM - 10 AM",
            Num_Attendants:"4",
            Staff:"Jatin, Trevi, Brenda, Jordan",
            Permit_Type:"Billable",
            PRO_Permits_located:"Pink Folder",
        },
        {
            Event_Name:"Chiefs meeting",
            UID:"4187",
            Event_Date:"8/2/2019",
            Location:"north entrance of SCPS",
            Time:"9-10am",
            Num_Attendants:"2",
            Staff:"Jonathan, Zach",
            Permit_Type:"Billable",
            PRO_Permits_located:"Pink Folder",
        },
        {
            Event_Name:"Project Raise - SIP Bootcamp",
            UID:"4188",
            Event_Date:"8/7/2019",
            Location:"SCPS (2) at each entrance",
            Time:"8:30 AM - 9:30 AM",
            Num_Attendants:"4",
            Staff:"Maria, Jazmin, Erick, Ericka, Fernanda ",
            Permit_Type:"Billable",
            PRO_Permits_located:"Pink Folder",
        }
     ]

const PAReducer = (state = PAData, action) => {

    switch (action.type) {
        
        case 'selectionView':
         //console.log(action.location)
        return {...state,selectedView:action.location }

        default:
                
        return state
    }
}

export default PAReducer;