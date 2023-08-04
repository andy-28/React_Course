import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>

      <a href="/pricing">Pricing</a>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default HomePage;
