import { Link } from "react-router-dom";
function GoBackHome({ page }) {
  return (
    <div>
      <p>
        <Link to={page}>Go back to App</Link>
      </p>
    </div>
  );
}
export default GoBackHome;
