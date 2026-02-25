import { useAuth } from "@/context/auth-context";
import { decodeToken } from "@/lib/decodeToken";

const Dashboard = () => {
  const { token } = useAuth();

  if (!token) return null;

  const { userName } = decodeToken(token);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">
        Welcome, {userName} 👋
      </h1>
    </div>
  );
};

export default Dashboard;