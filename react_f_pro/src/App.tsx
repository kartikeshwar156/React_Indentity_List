import ListGroup from "./Components/ListGroup";

// Mosh wrote the list and onselectitem function inside the component function.
let items = ["nda", "pnb", "nzm", "tpj", "hyd"];

function handleSelectitem(item: string) {
  console.log(item)
}

function App() {
  return (
    <>
      <div>
        <ListGroup items={items} heading="City List" onSelectitem={handleSelectitem}></ListGroup>
      </div>
    </>
  );
}

export default App;
