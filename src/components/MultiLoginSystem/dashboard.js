import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <p>Your Role: {user.role}</p>
    </div>
  );
};
