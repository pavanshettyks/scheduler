import React, { Component } from 'react'

import PAFilters from './PAFiIters'
import PATable from './PATable'
export class PAScreen extends Component {


    render() {
        return (
            <div>
                <PAFilters />
                <PATable />
            </div>
        )
    }
}



export default PAScreen;
