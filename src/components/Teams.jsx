import React from 'react';
import AddTeam from './AddTeam'
import AppAddButton from './AppAddButton'
import AppAddButtonRight from './AppButtonRightLabel'
import AddMember from './AddMember'
import Label from './AppLabel'

export default class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTeam: false,
            showMember: false
        }
    }

    handleAddMember(){
        this.setState({
            showMember: true
        })
    }

    handleClick() {
        this.setState({
            showTeam: true
        })
    }

    render() {
        return (<div>
            {this.state.showMember &&
                <AddMember />
            }
            {this.state.showTeam &&
                <div>
                    <AddTeam />
                </div>
            }
            {!this.state.showMember &&
                <AppAddButtonRight handleClick={this.handleAddMember.bind(this)}/>
            }
            {!this.state.showTeam &&
                <div>
                    <AppAddButton handleClick={this.handleClick.bind(this)} />
                    <Label label="Add Team" />
                </div>
            }
        </div>)
    }
}