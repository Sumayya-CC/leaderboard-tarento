import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function TabContainer(props) {
    return (
        <div style={{ paddingLeft: '5%', paddingTop: '2%' }}>
            {props.children}
        </div>
    )
}


class ReactTab extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const { tabList, tabContent } = this.props;
        const styles = {
            appbar: {
                color: 'black',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                padding: '0 5%'
            }
        };

        return (
            <div>
                <AppBar position="static" style={styles.appbar}>
                    <Tabs value={value} onChange={this.handleChange} indicatorColor="secondary">
                        {
                            tabList.map(function (tabList, i) {
                                return <Tab label={tabList} key={i}></Tab>
                            })
                        }
                    </Tabs>
                </AppBar>
                {
                    tabContent.map(function (tabContent, i) {
                        if (value === i) {
                            return (<TabContainer key={i}>{tabContent}</TabContainer>)
                        }
                    })
                }
            </div>
        );
    }
}


export default ReactTab