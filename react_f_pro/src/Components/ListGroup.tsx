import { useState } from "react";



// items.map((item) => <li>{item}</li>);


function ListGroup() {

  let items = ["nda", "pnb", "nzm", "tpj", "hyd"];
  let [selectedindex, setselectedindex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setselectedindex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
