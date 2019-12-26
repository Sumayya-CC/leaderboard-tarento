import React from 'react';
import AddTeam from './AddTeam'
import AppAddButton from './AppAddButton'
import Label from './AppLabel'

export default class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTeam: false
        }
    }

    handleClick() {
        this.setState({
            showTeam: true
        })
    }

    render() {
        return (<div>
            {this.state.showTeam &&
                <AddTeam />
            }
            {!this.state.showTeam &&
                <div>
                    <AppAddButton handleClick={this.handleClick.bind(this)} />
                    <Label label="Add Team"/>
                </div>
            }
        </div>)
    }
}