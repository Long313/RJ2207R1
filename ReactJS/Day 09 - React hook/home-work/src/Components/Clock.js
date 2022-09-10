import useClock from '../hook/UseClock';
export default function Clock() {
    const [clock] = useClock();
    return (
            <span>{clock}</span>
    )
}