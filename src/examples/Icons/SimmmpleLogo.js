import PropTypes from "prop-types";
import logo from "./LOGO.png";

function SimmmpleLogo({ size }) {
  const colorClass = `text`;
  return (
    <div className={`png-icon ${colorClass}`} style={{ width: size, height: size/2 }}>
      <img src={logo} alt="Simmmple Logo" style={{ width: "100%", height: "100%", margin:0}} />
    </div>
  );
}

// Setting default values for the props of SimmmpleLogo
SimmmpleLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the SimmmpleLogo
SimmmpleLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimmmpleLogo;
