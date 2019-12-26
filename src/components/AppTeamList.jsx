import React from 'react';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
export default class AppTeamList extends React.Component {

    render() {

        return (

            <div>
                <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
                    Team Red
                </Typography>

                <Typography variant="h5" gutterBottom style={{ color: 'grey' }}>
                    John Doe
                </Typography>


            </div>)
    }
}

