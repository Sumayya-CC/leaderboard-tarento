import React from 'react';
import Header from '../components/Header'
import AppTab from '../components/AppTab'
import Teams from '../components/Teams'
import theme from '../theme/default'
import { ThemeProvider } from '@material-ui/core/styles';
import Score from '../components/Score';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Header />
                    <div style={{ padding: '2%' }}>
                        <AppTab
                            tabList={['TEAM', 'SCORE']}
                            tabContent={[
                                <Teams />,
                                <Score />
                            ]}
                        />
                    </div>
                </ThemeProvider>
            </div>
        )
    }
}