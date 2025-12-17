import { useState } from 'react';
import { addStudent } from './API';
function Contact() {
    const [obj, setObj] = useState({});
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(obj);
        addStudent(obj);
    }
    return (
        <>
            <h1>Contact Page</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>
                                Name
                            </label>
                        </td>
                        <td>:</td>
                        <td>
                            <input
                                type="text"
                                name="Name"
                                onChange={(e) => setObj({ ...obj, Name: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                RollNo
                            </label>
                        </td>
                        <td>:</td>
                        <td>
                        <input
                                type="Number"
                                name="RollNo"
                                onChange={(e) => setObj({ ...obj, RollNo: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Age
                            </label>
                        </td>
                        <td>:</td>
                        <td>
                        <input
                                type="number"
                                name="Age"
                                onChange={(e) => setObj({ ...obj, Age: e.target.value })}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleFormSubmit}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
export default Contact;