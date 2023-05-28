import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Welcome!</div>
      <button
        onClick={() => {
          navigate("/createRoom");
        }}
      >
        Create Room
      </button>
      <button
        onClick={() => {
          navigate("/joinRoom");
        }}
      >
        Join Room
      </button>
    </div>
  );
}
