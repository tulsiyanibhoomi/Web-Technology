import logo from './logo.svg';
import './App.css';

function App() {
  let name = [
    {
      name: "Bhoomi",
      age: 19,
      spi: 7
    },
    {
      name: "Komal",
      age: 19,
      spi: 10
    },
    {
      name: "Mansi",
      age: 18,
      spi: 10
    },
  ];
  const nameList = name.map((name) => {
    return (
      <>
        <tr>
          <td style={{padding:"5px 10px 5px 10px"}}>{name.name}</td>
          <td style={{padding:"5px 10px 5px 10px"}}>{name.age}</td>
          <td style={{padding:"5px 10px 5px 10px"}}>{name.spi}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <table border="1" style={{margin:"10px"}}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>SPI</th>
        </tr>
        {nameList}
      </table>
    </>
  );
}

export default App;