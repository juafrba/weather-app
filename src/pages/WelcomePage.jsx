import React from 'react';
import { IconContext } from 'react-icons';
import { Link as RouterLink } from 'react-router-dom';

import { WiDaySunny } from 'react-icons/wi';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import WelcomeScreen from '../components/WelcomeScreen';

const WelcomePage = () => {
    return (
        <WelcomeScreen>
            <Grid
                container
                direction="column"
                justify="center"
                className="full">
                <div className="highlight">
                    <Grid
                        item
                        container
                        xs={12}
                        justify="center"
                        alignItems="center">
                            <Grid item>
                                <IconContext.Provider value={{ size: "6em" }}>
                                    <WiDaySunny />
                                </IconContext.Provider>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                justify="center"
                                alignItems="center">
                                <Typography variant="h4" color="inherit">
                                    Weather App
                                </Typography>
                                <Link
                                    color="inherit"
                                    aria-label="menu"
                                    component={RouterLink}
                                    to="/main">
                                    Entrar
                                </Link>
                            </Grid>
                    </Grid>
                </div>
            </Grid>
        </WelcomeScreen>
    )
};

export default WelcomePage;
