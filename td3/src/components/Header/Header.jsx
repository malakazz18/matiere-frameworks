import style from "./Header.module.css";
function Header(){
    return (
        <header className={style.header}> 
            <h1 >Travel agency </h1>
            < nav classname={style.nav}>
              <a href="#">acceuil </a> 
              <a href="#">destination </a>
              <a href="#">contacts  </a> 
            </nav> 
        </header>

    );
}
export default Header;