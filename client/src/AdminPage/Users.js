import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Users() {
  const { apidata } = useSelector((state) => state.api);
  const [show, setShow] = useState(false);
  const totalemails = apidata.length;
  console.log(apidata);
  const Showdata = () => {
    const listItems = apidata.map((product) => (
      <Link to={`/UserDetails/${product._id}`}>
        <li class="list-group-item" key={product._id}>
          {product.email}
        </li>
      </Link>
    ));
    return <ol>{listItems}</ol>;
  };
  return (
    <div>
      <Showdata />
    </div>
  );
}

export default Users;
