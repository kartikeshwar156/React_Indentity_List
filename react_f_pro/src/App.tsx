import Button from "./Components/Button";
// Mosh wrote the list and onselectitem function inside the component function.
let items = ["nda", "pnb", "nzm", "tpj", "hyd"];

function handleSelectitem(item: string) {
  console.log(item);
}

function print_console(){
  console.log("clicked the button")
}

function App() {
  return (
    <>
      <div>
        <Button color="danger" onClick={print_console}>
          button first mine
        </Button>
      </div>
    </>
  );
}

export default App;
