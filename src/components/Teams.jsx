import React from 'react';
import AddTeam from './AddTeam'
import AppAddButton from './AppAddButton'
import AppAddButtonRight from './AppButtonRightLabel'
import AppTeamList from './AppTeamList'
import AddMember from './AddMember'
import Label from './AppLabel'
import Grid from "@material-ui/core/Grid";

export default class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTeam: false,
            showMember: false
        }
    }

    handleAddMember() {
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
            <Grid container spacing={24} >
                <Grid item xs={2} sm={2} md={2} xl={2} lg={2} >
                    <AppTeamList />
                    {this.state.showMember &&
                        <AddMember />
                    }
                    {!this.state.showMember &&
                        <AppAddButtonRight handleClick={this.handleAddMember.bind(this)} />
                    }
                </Grid>
                <Grid item xs={2} sm={2} md={2} xl={2} lg={2} >
                    {this.state.showTeam &&
                        <div>
                            <AddTeam />
                        </div>
                    }
                    {!this.state.showTeam &&
                        <div>
                            <AppAddButton handleClick={this.handleClick.bind(this)} />
                            <Label label="Add Team" />
                        </div>
                    }
                </Grid>
            </Grid>
        </div>)
    }
}