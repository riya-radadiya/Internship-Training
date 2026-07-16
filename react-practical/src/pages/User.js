import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <h3>User ID: {id}</h3>
    </div>
  );
}

export default User;