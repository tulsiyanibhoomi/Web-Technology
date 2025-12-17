import { useState, useEffect } from 'react';
import { fetchStudentData, addStudent } from './API.js';
function Home() {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        fetchStudentData()
            .then(res => setArr(res))
            .then(console.log(arr));
    }, []);
    return (
        <>
            <h1>Home Page</h1>
            <div className='container d-flex justify-content-center align-items-center'>
                <div className='row'>
                    <div className='col'>
                        {arr.length > 0 ? (
                            <table border="1" className='table table-hover table-info table-bordered text-center'>
                                <thead>
                                    <tr border="2">
                                        <th>Name</th>
                                        <th>RollNo</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arr.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{item.Name}</td>
                                            <td>{item.RollNo}</td>
                                            <td>{item.Age}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-dark fs-4 fw-bold">No items found!</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;