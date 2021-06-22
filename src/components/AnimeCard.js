import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { SearchContext } from '../context/search';
import { Typography, Link, Paper, GridListTile, Grid } from '@material-ui/core';
import './AnimeCard.scss';

const AnimeCard = (props) => {
    const history = useHistory();
    const search = useContext(SearchContext);

    // handler for clicking on an anime and redirecting to results page
    const onClickHandler = () => {
        // fetch the list of recommendations for the anime
        fetch(`https://api.jikan.moe/v3/anime/${props.anime.mal_id}`)
            .then((response) => response.json())
            .then((data) => {
                search.setSingle(data);
                localStorage.setItem('singleData', JSON.stringify(data));
                history.push('/results');
            });
    };

    // info to be shown for each individual anime
    const title = 
        props.anime.title.length > 15 
            ? `${props.anime.title.substring(0, 15)}...` 
            : props.anime.title;
    const imageUrl = props.anime.image_url;
    const synopsis = 
        props.anime.synopsis.length > 30 
            ? `${props.anime.synopsis.substring(0, 30)}...` 
            : props.anime.synopsis;

    return (
        // formatted individual anime with info displayed here 
        <GridListTile className="animeCard__container">
            <Link onClick={onClickHandler}>
                <Grid container item xs={12}>
                    <Paper className="animeCard__paper">
                        <img src={imageUrl} alt={title} style={{maxHeight: 300}} />
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" component="h2" paragraph={true}>
                            {synopsis}
                        </Typography>
                        
                    </Paper>
                </Grid>
            </Link>
        </GridListTile>
    );
};

export default AnimeCard;