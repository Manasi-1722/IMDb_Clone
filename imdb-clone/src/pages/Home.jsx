
import { useEffect, useState } from 'react';

import { Box, Typography, styled } from '@mui/material';

import { getCategoryMovies} from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';

// components
import Header from "../components/common/Header";
import Banner from '../components/Banner';
import UpNext from '../components/UpNext';
import Slide from '../components/Slide';


const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

const Component = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Text = styled(Typography)`
    color: #F5C518;
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    padding-top: 10px;
`;


const Home = () => {

const [movies, setMovies ] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getCategoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();
    }, [])

    return (
        <>
            <Header />
            <Component>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <Text>Featured Today</Text>
                <Slide movies={movies} />
                
                <Text>What to watch?</Text>
                <Slide movies={movies} />
                
                <Text>Top 10 on IMDb this week</Text>
                <Slide movies={movies} />

                <Text>Fan favourite</Text>
                <Slide movies={movies} />

                <Text>More To Watch</Text>
                <Slide movies={movies} />

                <Text>Exclusive Videos</Text>
                <Slide movies={movies} />

                <Text>IMDb Originals</Text>
                <Slide movies={movies} />
            </Component>
        
        </>  
    )
}


export default Home;