const apiURL = 'http://localhost:3000/student';
export const fetchStudentData= async ()=>{
    const arr=await fetch(apiURL).then(res=>res.json());
    console.log(arr);
    return arr;
}
// export const addStudent=(data)=>{
//     fetch(apiURL,{
//         method:"POST",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//     .then(res=>res.json())
//     .then(console.log(data));
// }
export const addStudent = async (data) => {
    try {
        const response = await fetch(apiURL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Checking if the response is ok (status code 2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Response from API:', result);  // Log the API response
    } catch (error) {
        console.error('Error adding student:', error);  // Log any error that occurs
    }
};

export const deleteElectronics = async (id,navigate) => {    
    fetch(apiURL+'/'+id, {method: "DELETE"})
    .then(res=>res.json())
    .then(res=>{
        navigate('/stock');
    });
};