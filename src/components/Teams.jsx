import React from 'react';
import AddTeam from './AddTeam'
import AppAddButton from './AppAddButton'
import AppAddButtonRight from './AppButtonRightLabel'
import AppTeamList from './AppTeamList'
import AddMember from './AddMember'
import Label from './AppLabel'
import Grid from "@material-ui/core/Grid";

import axios from 'axios';
export default class Teams extends React.Component {
    state = {
        showTeam: false,
        showMember: false,
        teams: [],
        teamName: ''
    }

    componentDidMount() {
        var self = this;
        axios.get('http://172.17.18.41:8081/team/getTeamScores')
            .then(function (response) {
                const teams = response.data
                self.setState({
                    teams
                })
            })
            .catch(function (error) {
                console.log(error);
            });
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

    handleSave(){
        var self = this;
        axios.post('http://172.17.18.41:8081/team/addTeam',{teamName: self.teamName})
        .then(function (response) {
            self.componentDidMount()
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    changeHandler(event){
        this.setState({
            teamName: event.target.value
        })
    }

    render() {
        let teams = this.state.teams
        return (<div>
            <Grid container spacing={24} >
                {teams && Array.isArray(teams) && teams.length > 0 ?
                    teams.map((team) => {
                        return <Grid item xs={2} sm={2} md={2} xl={2} lg={2} >
                            <AppTeamList team={team}/>
                            {this.state.showMember &&
                                <AddMember />
                            }
                            {!this.state.showMember &&
                                <AppAddButtonRight handleClick={this.handleAddMember.bind(this)} />
                            }
                        </Grid>
                    })
                    :
                    null
                }
                <Grid item xs={2} sm={2} md={2} xl={2} lg={2} >
                    {this.state.showTeam &&
                        <div>
                            <AddTeam changeHandler={this.changeHandler.bind(this)} handleSave={this.handleSave.bind(this)}/>
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