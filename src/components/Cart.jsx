import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../Slicecart";

function Cart() {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleted(item) {
    dispatch(remove(item));
  }
  return (
    <>
      <div className="container text-center">
        <div className="row">
          {items.map((item) => (
            <div className="card col-3 m-3 p-2" key={item.id}>
              <img
                src={item.image}
                className="card-img-top mx-auto my-2"
                alt="..."
                style={{ width: "8rem", height: "12rem" }}
              />
              <div className="card-body d-flex justify-content-center align-items-center flex-column position-relative">
                <h5 className="card-title">{item.title.slice(0, 20)}</h5>
                <p className="card-text">$ {item.price}</p>
                <a
                  href="#"
                  S
                  className="btn btn-danger position-absolute bottom-0"
                  onClick={() => deleted(item.id)}
                >
                  Remove
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
