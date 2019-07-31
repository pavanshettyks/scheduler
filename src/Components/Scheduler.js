import Day from './Day'
import Selection from './Selection'



import React from 'react'

export default function Scheduler() {
    return (

            <div>
                <Selection/>
                <Day day={'Monday'} />
                <Day day={'Tuesday'} />
                <Day day={'Wednesday'} />
                <Day day={'Thursday'} />
                <Day day={'Friday'} />
            </div>
  
    )
}
