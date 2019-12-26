import React from 'react';
import Button from '@material-ui/core/Button';

export default class AppButton extends React.Component {

    render(){
        return (
<Button variant="contained" style={{backgroundColor:"#33C6C3" , color:"white" , paddingLeft:50,paddingRight:50 }} >
  save
</Button>)
    }
}