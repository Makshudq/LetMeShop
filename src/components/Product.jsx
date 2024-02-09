import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Slicecart";

function Product() {
  const [state, setstate] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((data) => data.json())
      .then((result) => setstate(result));
  }, []);

  function addtocart(item) {
    dispatch(add(item));
  }

  return (
    <>
      <div className="container container-products text-center p-5">
        <div className="row d-flex justify-content-center ">
          {state.map((item) => (
            <div
              className="card col-lg-3 col-md-4 col-sm-6 m-3 pt-2"
              key={item.id}
            >
              <img
                src={item.image}
                className="card-img-top mx-auto my-2"
                alt="..."
                style={{ width: "8rem", height: "12rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.title.slice(0, 20)}</h5>
                <p className="card-text">
                  {item.description.slice(0, 40)}{" "}
                  <span className="badge bg-secondary ms-2">Read More</span>
                </p>{" "}
                <div className="d-flex justify-content-between btn-div">
                  <a href="#" className="btn btn-secondary">
                    $ {item.price}
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary fw-semibold"
                    onClick={() => addtocart(item)}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
