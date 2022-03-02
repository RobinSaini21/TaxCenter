import React from "react";
import { useSelector } from "react-redux";

function Users() {
  const { apidata } = useSelector((state) => state.api);
  console.log(Array.isArray(apidata));
  const totalemails = apidata.length;
  console.log(apidata);

  const listItems = apidata.map((product) => (
    <li class="list-group-item" key={product._id}>
      {product.email}
    </li>
  ));
  console.log(listItems);
  return (
    <div>
      <ol class="list-group">{listItems}</ol>
    </div>
  );
}

export default Users;
