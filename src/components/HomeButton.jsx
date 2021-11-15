
// Important
import { useNavigate } from 'react-router-dom';
// Icons
import { GoHome } from 'react-icons/go';

const HomeButton = () => {
    const navigate = useNavigate();

    return(
        <div className="btn btn-outline-primary rounded-circle d-flex me-2" 
            style={{ height: 55+'px', width: 55+'px'}}
            onClick={() => navigate("/")}>
            <GoHome size={40} />
        </div>
    );
};

export default HomeButton