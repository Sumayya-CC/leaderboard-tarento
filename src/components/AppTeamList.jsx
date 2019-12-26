import React from 'react';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
export default class AppTeamList extends React.Component {

    render() {

        return (

            <div>
                <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
                    {this.props.team.teamName}
                </Typography>
                {this.props.team.members && Array.isArray(this.props.team.members) && this.props.team.members.length > 0 &&
                    this.props.team.members.map((member) => {
                        return <Typography variant="h5" gutterBottom style={{ color: 'grey' }}>
                            {member.memberName}
</Typography>
                    })

                }

            </div>)
    }
}

