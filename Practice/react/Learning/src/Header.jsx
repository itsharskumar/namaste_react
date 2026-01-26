import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      width: "100%",
      background: "#fff",
      padding: "10px",
      borderBottom: "1px solid #ddd"
    }}>
      <Link to="/">Home</Link>{" | "}
      <Link to="/neet/online-coaching-class-11">Class11</Link>{" | "}
      <Link to="/neet/online-coaching-class-12">Class12</Link>{" | "}
      <Link to="/neet/online-coaching-Dropper">Dropper</Link>
    </div>
  );
};

export default Header;
