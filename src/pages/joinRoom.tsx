import { useNavigate } from "react-router-dom";

export function JoinRoom() {
  const navigate = useNavigate();
  return (
    <>
      <div>Join Room</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </>
  );
}
