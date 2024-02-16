import { useState } from "react";
import './ListGroup.css'


// items.map((item) => <li>{item}</li>);

interface Props{
  items: string[];
  heading: string;

  onSelectitem: (item: string) => void
}


function ListGroup({items, heading, onSelectitem}: Props) {

  let [selectedindex, setselectedindex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselectedindex(index)
              onSelectitem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
