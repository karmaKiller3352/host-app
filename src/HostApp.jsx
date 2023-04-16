import { useState } from "react";
import HeaderApp from 'headerApp/HeaderApp'

function HostApp() {
  const [count, setCount] = useState(0);

  return <div className="App"><HeaderApp></HeaderApp></div>;
}

export default HostApp;
