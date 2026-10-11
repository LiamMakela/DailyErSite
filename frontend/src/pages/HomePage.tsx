import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>The Dailyer Nebraskan</h1>

      <button onClick={() => navigate("/archive")}>Newspaper Archive</button>

      <button onClick={() => navigate("/nightlyer")}>Nightlyer Archive</button>

      <button onClick={() => navigate("/about")}>About</button>

      <div>
        <img src="/images/home.png" alt="Dailyer" />
      </div>
    </div>
  );
}
