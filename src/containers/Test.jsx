import React from 'react';
import AppButton from '../components/AppButton';
import AppLabel from '../components/AppLabel'


import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
export default class Test extends React.Component {

    render(){

        return(
            <div>
                <div>
                    <AppLabel/>
                </div>
               
                <div>
                    <TextField/>
                </div>
                <div>
                    <TextField/>
                </div>
                <div>
                    <AppButton/>
                </div>

            </div>
        )
    }
}
