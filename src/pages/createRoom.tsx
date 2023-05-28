import { useNavigate } from "react-router-dom";

export function CreateRoom() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Create Room</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
