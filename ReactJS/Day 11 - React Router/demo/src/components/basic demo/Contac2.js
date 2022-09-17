import { useParams } from "react-router-dom";
export const Contact2 = () => {
    const {pid} = useParams();
    return(
        <div>
            <h1>This is tel: {pid}</h1>
        </div>
    )    
}