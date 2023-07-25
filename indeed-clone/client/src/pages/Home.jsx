

import Header from '../components/Header';
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const Component = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    margin: '0 110px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        '& > div > p': {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1
        },
        '& > div > button': {
            width: 220,
            height: 60,
            background: 'rgb(37, 87, 167)',
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48
        }
    }
})

const Home = () => {    
    const navigate = useNavigate();

    const animatedImage = "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png?w=720&q=100&fm=avif";

    return (
        <>
            <Header />
            <Component>
                <Box>
                    <Box>
                        <Typography>Let's make your next<br/>great hire. Fast.</Typography>
                        <Button 
                            variant="contained"
                            onClick={() => navigate(routePath.create)}
                        >Post a job</Button>
                    </Box>
                </Box>       
                <Box>
                    <img src={animatedImage} alt="homeimage" style={{ width: 600 }} />
                </Box>
            </Component>
        </>
    )
}

export default Home;