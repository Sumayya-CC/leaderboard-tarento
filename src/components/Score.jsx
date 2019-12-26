import React from 'react';
import AddScore from './AddScore'
import AppAddButton from './AppAddButton'
import AppAddButtonRight from './AppButtonRightLabel'
import AddMember from './AddMember'
import Label from './AppLabel'

export default class Score extends React.Component {
    constructor(props) {
        super(props)
        
    }

   
   

    render() {
        return (<div>
        
            {
                <div>
                    <AddScore />
                </div>
            }
            
            
        </div>)
    }
}