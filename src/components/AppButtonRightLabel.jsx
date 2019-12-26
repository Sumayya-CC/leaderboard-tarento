import React from 'react';


import Button from '@material-ui/core/Button';



export default class Test extends React.Component {

    render(){
        return (
          <Button variant="contained" onClick={this.props.handleClick}> +  Add Member </Button>  
          )
    }
}