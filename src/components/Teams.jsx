import React from 'react';
import AddTeam from './AddTeam'
import AppAddButton from './AppAddButton'

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
                <AppAddButton handleClick={this.handleClick.bind(this)} />
            }
        </div>)
    }
}