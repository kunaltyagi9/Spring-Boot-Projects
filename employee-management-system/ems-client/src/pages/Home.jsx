
import { Box, Typography, styled } from '@mui/material';

import Information from '../components/home/Information';

const Wrapper = styled(Box)({
    padding: '20px 50px'
})

const Home = () => {
    return (
        <Wrapper>
            <Information
                text="Wishes"
            >
                <Box>
                    {
                        
                    }
                </Box>
            </Information>
            <Information
                text="Upcoming Holidays"
            >
                <Box>
                    {
                        
                    }
                </Box>
            </Information>
            <Information
                text="Announcement"
            >
                <Box>
                    {
                        
                    }
                </Box>
            </Information>
        </Wrapper>
    )
}

export default Home;