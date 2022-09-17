import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Product() {
    let navigate = useNavigate();
    let {categoryId} = useParams();
    return (
        <div>
            <h3>Id select {categoryId}</h3>
            <button type='button' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}