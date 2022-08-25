import React from 'react';
const studentList = [
    {
        id: 1,
        name: 'Nguyen Van Anh',
        age: 20,
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Pham Van Ba',
        age: 19,
        address: 'Sai Gon'
    },
    {
        id: 3,
        name: 'Tran Xuan Long',
        age: 26,
        address: 'Hue City'
    }
]

class StudentInfor extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentList.map((student,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default StudentInfor;