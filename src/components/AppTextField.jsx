import React from 'react';

import TextField from '@material-ui/core/TextField';

export default class AppTextField extends React.Component {

    render(){
        return (
            <TextField id="standard-basic" label="Team Name" onChange={this.props.changeHandler}/>
            
        )
    }
}