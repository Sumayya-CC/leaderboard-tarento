import React from 'react';
import TextField from './AppTextField'
import Button from './AppButton'

export default class AddTeam extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <TextField />
                </div>
                <div>
                    <Button />
                </div>
            </div>
        )
    }

}