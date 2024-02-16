import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
import Like from "./Components/Like";
// Mosh wrote the list and onselectitem function inside the component function.

function App() {
  let [Alertvisibility, setAlertvisibility] = useState(false);

  function print_alert() {
    setAlertvisibility(true);
  }

  function onClose(){
    setAlertvisibility(false);
  }

  return (
    <>
      <Like></Like>
       
      <div>
        
        {Alertvisibility ? <Alert onClose={onClose}>Alert Message !!!! </Alert> : null}
        <Button color="danger" onClick={print_alert}>
          button first mine
        </Button>
      </div>
    </>
  );
}

export default App;
