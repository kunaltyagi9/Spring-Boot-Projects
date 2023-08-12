
import { Box, Typography, styled } from '@mui/material';

const Wrapper = styled(Box)({
    width: '500px',
    marginBottom: 20
})

const Header = styled(Box)({
    background: '#72bcd4',
    padding: '5px 10px',
    borderRadius: '10px 10px 0 0',
    '& > p': {
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: 14
    }
})

const Information = ({ text, children }) => {

    return (
        <Wrapper>
            <Typography>{text}</Typography>
            <Header>
                <Typography>Today ({new Date().toDateString()})</Typography>
            </Header>
            {children}
        </Wrapper>
    )
}

export default Information;