
import { useNavigate } from 'react-router-dom';
import { routePath } from '../constants/route';

const Home = () => {

    const navigate = useNavigate();

    const homeImg = "https://www.leadfuze.com/wp-content/uploads/2020/12/shutterstock_749036344.jpg";

    return (
        <div>
            <img src={homeImg} alt="home" style={{ borderRadius: 10, width: '100%' }} />
            <button onClick={() => navigate(routePath.login)}
            >Lets Begin</button>
        </div>
    )
}

export default Home;