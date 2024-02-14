import Alert from "./Components/Alert";

// Mosh wrote the list and onselectitem function inside the component function.
let items = ["nda", "pnb", "nzm", "tpj", "hyd"];

function handleSelectitem(item: string) {
  console.log(item);
}

function App() {
  return (
    <>
      <div>
        <Alert>
          <p>hello now world</p>
          <li>now what?</li>
        </Alert>
      </div>
    </>
  );
}

export default App;
