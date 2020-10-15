import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const Resturants = ({resturants, selectResturant}) => {
    const handleSelect = (id) => {
        selectResturant(id);
    }

    return (
        <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
                {resturants.map(res => (
                    <Grid item xs={12} md={6} key={res.id}>
                        <Card>
                            <CardContent>
                                <Typography onClick={() => handleSelect(res.id)} style={{cursor: "pointer"}} variant="h5" component="h2">
                                    {res.name}
                                </Typography>
                                <Typography color="textSecondary">
                                    <Rating name="half-rating-read" defaultValue={res.rating} precision={0.2} readOnly /> {res.rating}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {res.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Resturants;