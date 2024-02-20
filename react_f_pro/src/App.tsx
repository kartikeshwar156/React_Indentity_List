import { useState } from "react";
import ExpandableText from "./Components/ExpandableText";


function App() {

  

  let text_given="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel modi alias ullam repellat, mollitia natus laudantium delectus maiores neque voluptatem, vitae consequuntur? Sed doloremque, dolorem repellat necessitatibus ex earum."

  return (
  <>
 <ExpandableText text_given={text_given} maxChar={20}></ExpandableText>

  </>
  );
}

export default App;
