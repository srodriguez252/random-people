import { useState } from "react";
import './App.css';

function App() {
  
  const [people , setPeople] = useState(null);
  const apiURL = 'https://randomuser.me/api/';

  function fetchPeople(){
    fetch(apiURL)
    .then(resp => resp.json())
    .then(data =>  {console.log(data); setPeople(data);})
  }

  

  return (
    <div className="frame" >
        <h1>Random People</h1>
        
        <button className="button-74" onClick={fetchPeople}>Show Person</button>
        
        {people && people.results.map((person , index) => {

        //const fullname = JSON.stringify(person.name);
        const fullname = person.name.title + ' ' + person.name.first + ' ' +person.name.last;
        const picture = person.picture.thumbnail;
        return(
        
        <div key={index}>
            <br/>
            <img src={picture} alt="Person"/>
            <p >{fullname}</p>
            <p>{person.dob.age}</p>
            <p>{person.gender}</p>
            <p>{person.email}</p>
            
            
        </div>
        )}
        )}

    </div>
  );
}

export default App;
