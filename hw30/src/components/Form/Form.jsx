import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCharacter } from "../../store/character/characterSlice";
import style from "./Form.module.scss";

export function Form() {
  const [characterId, setCharacterId] = useState("");
  const dispatch = useDispatch();
  function handleSearch(e) {
    e.preventDefault();
    if (characterId) {
      dispatch(fetchCharacter(characterId));
    }
  }

  return (
    <div className="container mt-5 text-center">
      <h1>SWAPI</h1>
      <form>
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
      </form>
    </div>
  );
}
