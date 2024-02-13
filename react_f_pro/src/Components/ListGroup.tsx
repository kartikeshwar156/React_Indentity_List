import { MouseEventHandler } from "react";

let items = ["nda", "pnb", "nzm", "tpj", "hyd"];

// items.map((item) => <li>{item}</li>);

function handle_onclick(event: MouseEventHandler) {
  console.log(event);
}

function ListGroup() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handle_onclick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
