import { useState } from "react";


function App() {
  
  const [people , setPeople] = useState(null);
  const apiURL = 'https://randomuser.me/api/';

  function fetchPeople(){
    fetch(apiURL)
    .then(resp => resp.json())
    .then(data =>  {console.log(data); setPeople(data);})
  }

  

  return (
    <div className="App">
        <h1>Random People</h1>
        <button className="fetch-button" onClick={fetchPeople}>Show Person</button>

        {people && people.results.map((person , index) => {

        //const fullname = JSON.stringify(person.name);
        const fullname = person.name.title + ' ' + person.name.first + ' ' +person.name.last;

        return(
        
        <div className="person-details" key={index}>
            <p>{person.gender}</p>
            <p>{fullname}</p>
            <p></p>
        </div>
        )}
        )}

    </div>
  );
}

export default App;
