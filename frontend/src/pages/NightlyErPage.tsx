import { useNavigate } from "react-router-dom";
import { videos } from "../data/videos";

export default function NightlyErPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <h1>Nightlyer Archive</h1>

      {videos.map((video) => (
        <div key={video.id}>
          <h2>{video.title}</h2>

          <a
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`../../public/images/${video.thumbnailImage}`}
              alt={video.title}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
