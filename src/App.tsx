import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [agents, setAgents] = React.useState<any>([]);

  async function handleClickBtn() {
    const getApiAgents = await fetch("https://valorant-api.com/v1/agents");
    const response = await getApiAgents.json();
    console.log(response);
    setAgents(response?.data);
  }

  React.useEffect(() => {
    console.log(agents);
  }, [agents]);
  return (
    <div className="App">
      {agents.map((item: any) => {
        return (
          <div className="card" style={{ background: "Red" }}>
            <p>Agent Name : {item.displayName}</p>
            <p>Agent Description : {item.description}</p>
          </div>
        );
      })}

      <button onClick={handleClickBtn}>Reload agents</button>
    </div>
  );
}

export default App;
