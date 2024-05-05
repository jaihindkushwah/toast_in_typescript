import { useState } from "react";
import { ToastPositionType, ToastStatusType } from "./@types/toast";
import "./App.css";
import { useToast } from "./Context/ToastProvider";
function App() {
  const [title, setTitle] = useState("Toast message");
  const [message, setMessage] = useState("What is going on");
  const [status, setStatus] = useState<ToastStatusType>("success");
  const [delayValue, setDelay] = useState<number>(3000);
  const [position, setPosition] = useState<ToastPositionType>("top-right");

  const toast = useToast();

  const toastHandlerButton = () => {
    toast.toastHandler({ delay: delayValue, message, position, status, title });
  };

  return (
    <div className="App">
      <div>
        <h1>Toast</h1>
        <div className="inputs">
          <span>
            <label htmlFor="title">Title: </label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </span>
          <span>
            <label htmlFor="message">Message: </label>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
          </span>
          <span>
            <label htmlFor="status">Status: </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as ToastStatusType)}
            >
              <option value="success">Success</option>
              <option value="error">Error</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
            </select>
          </span>
          <span>
            <label htmlFor="position">Position: </label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value as ToastPositionType)}
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="center">Center</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              <option value="top-left">Top left</option>
              <option value="top-right">Top right</option>
              <option value="bottom-left">Bottom left</option>
              <option value={"bottom-right"}>Bottom right</option>
            </select>
          </span>
          <span>
            <label htmlFor="delay">Delay: </label>
            <input
              type="range"
              min="1000"
              step="500"
              max="5000"
              value={delayValue}
              onChange={(e) => setDelay(Number(e.target.value))}
            />
            <span>{delayValue}</span>
          </span>
        </div>
        <div>
          <button className="show" onClick={toastHandlerButton}>
            Show toast
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
