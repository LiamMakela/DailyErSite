import { useNavigate } from "react-router-dom";
import { issues } from "../data/issues";

export default function ArchivePage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <h1>Newspaper Archive</h1>

      {issues.map((issue) => (
        <div key={issue.title}>
          <h2>{issue.title}</h2>

          <a href={issue.pdfUrl} target="_blank" rel="noreferrer">
            <img
              src={`../../public/covers/${issue.coverImage}`}
              alt={issue.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
