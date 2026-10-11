import { useNavigate } from "react-router-dom";
import { staff } from "../data/staff";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>

      <h1>About The Dailyer</h1>
      <p>Information about The Dailyer Nebraskan goes here.</p>

      <h2>Contact</h2>
      <p>Email: contact@example.com</p>

      <h2>Staff</h2>
      {staff.map((member) => (
        <div key={member.name}>
          <img src={`../../public/staff/${member.photo}`} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
}
