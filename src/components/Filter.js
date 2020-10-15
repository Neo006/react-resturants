import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        margin: '10px 0',
        width: 300
    },
});

const valuetext = (value) => {
    return `${value}°C`;
}

const Filter = ({filter}) => {
    const classes = useStyles();
    const [value, setValue] = useState([0, 5]);

    const handleChange = (event, newValue) => {
        filter(newValue[0], newValue[1]);
        setValue(newValue);
    };

    return (
        <Grid align="center" item xs={12} md={6}>
            <div className={classes.root}>
                <Typography id="range-slider" gutterBottom>
                    Rating
                </Typography>
                <Slider
                    value={value}
                    max={5}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>
        </Grid>
    )
}

export default Filter;