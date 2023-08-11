import { useEffect, useState } from "react";
import InternetStatus from "./components/InternetStatus";

function App() {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });

    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  return status ? (
    <InternetStatus
      alert="success"
      boldCTA="Success!"
      longText="Your internent connection has been connected. ✅"
    />
  ) : (
    <InternetStatus
      alert="danger"
      boldCTA="Heart Break 💔"
      longText="Your internet connection has been lost. ❌"
    />
  );
}

export default App;
