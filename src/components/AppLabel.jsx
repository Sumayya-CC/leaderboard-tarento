import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class AppLabel extends React.Component {

    render(){
        return (
<<<<<<< HEAD
            <Typography variant="h5" gutterBottom style={{color: 'black'}}>
            
=======
            <Typography variant="h5" gutterBottom>
            {this.props.label}
>>>>>>> 71dc811e1b1f86ef0aae3e20b3a2d45f581b6e07
          </Typography>   
        )
    }
}