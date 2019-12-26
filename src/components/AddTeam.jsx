import React from 'react';
import TextField from './AppTextField'
import Button from './AppButton'

export default class AddTeam extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <TextField changeHandler={this.props.changeHandler}/>
                </div>
                <div>
                    <Button clickHandler={this.props.handleSave}/>
                </div>
            </div>
        )
    }

}