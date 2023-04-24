import React from "react";
import { useDispatch} from "react-redux";
import Banner from "../../components/Banner/Banner";
import Filter from "../../components/Filter/Filter";

const Home = ()=>{
    const dispatch = useDispatch();

    return(
        <>
            <Banner/>
            <Filter/>
        </>
    )
}

export default Home;