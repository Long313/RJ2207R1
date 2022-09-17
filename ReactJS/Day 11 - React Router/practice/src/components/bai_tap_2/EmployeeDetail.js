import { useLocation } from "react-router-dom";
export default function DeployeeDetail() {
    const {state} = useLocation();
    return (
        <div>Hello {state.name} - {state.age}</div>
    )
}