import { useAuth } from "./context/auth-context";
import { LandingPage } from "./components/landingPage";
import Dashboard from "./components/Dashboard";
import { Toaster } from "react-hot-toast";
function App() {
  const { token } = useAuth();

  return (
    <>
    <div><Toaster/></div>
      {token ? <Dashboard /> : <LandingPage />}
    </>
  );
}

export default App;