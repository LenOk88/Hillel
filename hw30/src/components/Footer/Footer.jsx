import { useDispatch } from "react-redux";
import { clearCharacter } from "../../store/character/characterSlice";
import style from "./Footer.module.scss";

export function Footer() {
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 text-center">
      <footer className={style.footer}>
        <button className="btn btn-danger" onClick={() => dispatch(clearCharacter())}>
          Clear
        </button>
      </footer>
    </div>
  );
}
