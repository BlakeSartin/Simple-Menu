import { useEffect, useState } from "react";
import axios from 'axios'


function Burgers() {
const [burgers, setBurgers] = useState([])

useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://burgers1.p.rapidapi.com/burgers',
      headers: {
        'X-RapidAPI-Host': 'burgers1.p.rapidapi.com',
        'X-RapidAPI-Key': 'e6476deb2dmshb2f511ebd65470fp10d0d2jsn7afb221ccb03'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      setBurgers(response.data)
    }).catch(function (error) {
      console.error(error);
    });
}, [])


return (

<div className="burger-list">
  {burgers.map((burger) => (
    <div key={burger.id}>
      <p>
        {burger.name}
      </p>
      <p>
        {burger.description}
      </p>
    </div>
  ))}
  </div>
  )

}

export default Burgers;