import "../Nav-bar/Navigation.css";

const Navigation = () => {
  return (
    <div classname="App">
      <nav>
        <div classname="logo">
          <img src="./images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">LOCATION</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button type="button">Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
