import Button from "./Components/Button";
import Like from "./Components/Like";
import { useState } from "react";
import Message from "./Components/Message";
// Mosh wrote the list and onselectitem function inside the component function.

function App() {
  let [game, setGame]=useState({
    id: 1,
    player:{
      name: "Kartik",
    }
  })

  function handleClick(){
    setGame({...game, player: {name: "Bobo"}})
  }

  function print_values(){
    console.log(game.player.name)
  }

  return (
    <>
      <Message></Message>
      <Message></Message>
      <Message></Message>
      
    </>
  );
}

export default App;
