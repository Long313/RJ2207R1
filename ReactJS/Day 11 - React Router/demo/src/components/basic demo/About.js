import { useNavigate } from "react-router-dom";
export const About = () => {
    const navigate = useNavigate();
    return (<div>
        <h1>This is a about page</h1>
        <button type="button" onClick={() => navigate(-1)}>Back</button>
        <button type="button" onClick={() => navigate('/')}>Home</button>
        <button type="button" onClick={() => navigate('/contact')}>Contact</button>
        </div>
    )
}