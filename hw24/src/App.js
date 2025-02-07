import React from 'react';
import './App.css';

function App() {
  return (
<div className="container mt-5">
  <div class="input-group">
    <h1>SWAPI</h1>
    <span class="input-group-addon">https://swapi.dev/api/</span>
    <input id="interactive" type="text" class="form-control" placeholder="people/1/"/>
    <span class="input-group-btn"><button onclick="interactive_call();return false;" class="btn btn-primary">Get info</button></span>
  </div>
  <section className="bg-light p-5 rounded">
    <pre className="bg-dark text-white p-3 rounded">
                {`{
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
      }`}
    </pre>
  </section>

</div>
  );
}

export default App;
