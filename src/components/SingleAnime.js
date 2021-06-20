import React, { useEffect } from 'react';
import { Grid, Typography, Paper, Link } from "@material-ui/core";
import './SingleAnime.scss'

const SingleAnime = (props) => {
    // information to be displayed for each anime
    const {title, image_url, episodes, rating, airing, broadcast, score} = props.info;

    useEffect(() => {
        console.log(title, image_url);
    }, [props.info]);

    return (
        // display single anime + 10 recommendations
        <Grid 
            container 
            spacing={10} 
            direction="row" 
            justify="center" 
            alignItems="center" 
            alignContent="center"
            className="singleAnime__container"
        >
            <Grid item>
                <img src={image_url} alt={title} className="singleAnime__image" />
            </Grid>
            <Grid item>
                <Paper elevation={3} className="singleAnime__description">
                    <Typography variant="h4" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Airing: {String(airing)}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Score: {score}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Broadcast: {broadcast}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Rating: {rating}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Episodes: {episodes}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SingleAnime;