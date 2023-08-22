
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { categoryMovies} from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';
// components
import Header from "../components/common/Header";

const Home = () => {

const [movies, setMovies ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])
    return (
        <>
            <Header />
            <Box>
                <Banner />
            </Box>
            
        
        </>
        
        
    )
}


export default Home;