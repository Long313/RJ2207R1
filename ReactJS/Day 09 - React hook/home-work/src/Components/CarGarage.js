import { useState,useEffect } from 'react';
export default function CarGarage() {
    const carList = ['Lambo', 'BMW', 'Porsche', 'Toyota', 'Ford'];
    const colorList = ['Red','Green', 'Blue', 'Yellow', 'Black', 'White'];
    const [selectedCar, setSelectedCar] = useState({color: colorList[0], car: carList[0]});
    const [value,setValue] = useState({color:colorList[0], car: carList[0]});
    const handleChange = (e) => {
        setSelectedCar({...selectedCar, [e.target.name]: e.target.value})
    }
    return (
        <div className="container">
            <h1>Select your car</h1>
            <span>Select a car </span>
            <select name="car" onChange={ e => handleChange(e)}>
                {carList.map((car, index) => {
                    return <option value={car} key={index}>{car}</option>
                })}
            </select>
            <br/>
            <span>Select a color </span>
            <select name="color" onChange={ e => handleChange(e)}>
                {colorList.map((color, index) => {
                    return <option value={color} key={index}>{color}</option>
                })}
            </select>
            <p>You selected a: {selectedCar.color} - {selectedCar.car} </p>
        </div>
    )
}