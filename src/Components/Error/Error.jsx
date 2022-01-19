import "./Error.css";
import errorIcon from "./error_icon.png";
function Error() {
  return (
    <div className="Error">
      <img className="error_icon" src={errorIcon} alt="" />
      <h1>NO PAGE FOUND !!!</h1>
    </div>
  );
}
export default Error;
