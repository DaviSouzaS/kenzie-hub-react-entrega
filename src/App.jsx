import { useState } from "react";
import { PrincipalRoutes } from "./routes"


function App() {

  const [user, setUser] = useState([])

  return (

    <PrincipalRoutes setUser = {setUser}/>   

  );
}

export default App;
