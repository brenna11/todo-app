import './Header.scss';
import { TiThList } from "react-icons/ti";

function Header() {
  const titleClick = () => {
    window.location.href = "/home";
  }

  return (
    <header className="todo">
      <div className="title" onClick={titleClick}>
        <TiThList />
        To-do App
      </div>
      <div className="author">
        by Ravinun Navacinthorn
      </div>
    </header>
  );
}

export default Header;