import { useState } from "react";
import { UserContext } from "./context/UserContext";
import Routing from "./pages/routing";

function App() {
  const [user, setUser] = useState("");
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
