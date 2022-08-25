const names = ['Batman', 'Iron man','Nicholas Cage', 'Mega Man', 'Bono', 'Catwoman'];
function Hello() {
    return (
        names.map( name => {
            return <p>Hello, {name}!</p>
        })
    )
     
}
// function helloFunction(name) {
//     return (
//         <p>Hello,{name}!</p>
//     )
// }
export default Hello;