import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import OutlinedInput from "@material-ui/core/OutlinedInput";

const Search = ({search}) => {
    const handleChange = (e) => {
        search(e.target.value.trim());
    }

    return (
        <Grid align="center" item xs={12} md={6}>
            <FormControl variant="outlined">
                <InputLabel htmlFor="search">Resturant Name</InputLabel>
                <OutlinedInput
                    id="search"
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    labelWidth={118}
                />
            </FormControl>
        </Grid>
    )
}

export default Search;