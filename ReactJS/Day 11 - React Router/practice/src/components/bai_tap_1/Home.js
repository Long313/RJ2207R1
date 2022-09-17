import { useLocation } from "react-router-dom"
export default function Home() {
    const {state} = useLocation();
    return <p>Account: {state.email} -{state.password}</p>
}