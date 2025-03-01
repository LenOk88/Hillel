import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter, clearCharacter } from "./store/slices/characterSlice";

function App() {
  const [characterId, setCharacterId] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.character);

  const handleSearch = () => {
    if (characterId) dispatch(fetchCharacter(characterId));
  };

  return (
    <div className="container mt-5 text-center">
      <h1>SWAPI</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Введите ID персонажа (например, 1)"
        value={characterId}
        onChange={(e) => setCharacterId(e.target.value)}
      />
      <button className="btn btn-click" onClick={handleSearch}>
        Get info
      </button>

      {loading && <p className="text-loading">Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {data && (
        <div className="card mt-3">
          <div className="card-body">
            <h2>Name: {data.name}</h2>
            <p>Height: {data.height} см</p>
            <p>Mass: {data.mass} кг</p>
            <p>Hair color: {data.eye_color}</p>
            <p>Birth year: {data.birth_year}</p>

            <h4>📽 Films:</h4>
            <ul className="list-group">
              {data.films.length > 0 ? (
                data.films.map((film, index) => <li key={index} className="list-group-item">{film}</li>)
              ) : (
                <li className="list-group-item">No information</li>
              )}
            </ul>

            <h4>🚀 Ships:</h4>
            <ul className="list-group">
              {data.starships.length > 0 ? (
                data.starships.map((ship, index) => <li key={index} className="list-group-item">{ship}</li>)
              ) : (
                <li className="list-group-item">No information</li>
              )}
            </ul>
          </div>
        </div>
      )}

      {}
      <footer className="footer">
        <button className="btn btn-danger" onClick={() => dispatch(clearCharacter())}>
          Clear
        </button>
      </footer>
    </div>
  );
}

export default App;
