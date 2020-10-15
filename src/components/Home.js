import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Filter from "./Filter";
import Search from "./Search";
import Resturants from "./Resturants";
import Map from "./Map";
import * as resturantList from "../data/resturantList";

const Home = () => {
    const [initialState] = useState(resturantList.default);
    const [resturants, setResturants] = useState(initialState);
    const [filterValue, setFilterValue] = useState({
        filter: {min: 0, max: 5},
        search: ''
    });
    const [selectedResturant, setSelectedResturant] = useState({});

    const search = (value) => {
        return setFilterValue(prevState => ({
            ...prevState,
            search: value
        }));
    }

    const filter = (min, max) => {
        return setFilterValue(prevState => ({
            ...prevState,
            filter: {min: min, max: max}
        }));
    }

    useEffect(() => {
        let data = initialState.filter(res => {
            let result = res.name.toLowerCase().indexOf(filterValue.search.toLowerCase()) >= 0
                && res.rating > filterValue.filter.min
                && res.rating < filterValue.filter.max;
            return result;
        });
        setSelectedResturant({});
        setResturants(data);
    }, [filterValue]);

    const selectResturant = (id) => {
        let data = initialState.filter(res => {
            return res.id === id
        });
        return setSelectedResturant(data);
    }

    const closePopup = () => {
        return setSelectedResturant({});
    }

    return (
        <Grid container spacing={3}>
            <Filter filter={filter} />
            <Search search={search} setFilterValue={setFilterValue} />
            <Resturants resturants={resturants} selectResturant={selectResturant} />
            <Map resturants={resturants} showPopup={selectedResturant} closePopup={closePopup} />
        </Grid>
    )
}

export default Home;