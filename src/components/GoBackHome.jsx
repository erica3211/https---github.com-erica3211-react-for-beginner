import { Link } from "react-router-dom";
function GoBackHome({ page }) {
  return (
    <div>
      <Link to={page}>Go back to App</Link>
    </div>
  );
}
export default GoBackHome;
