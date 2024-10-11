import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../redux/action";

export default function DanhSachSanPham() {
  // lấy data từ redux về
  let listShoe = useSelector((state) => {
    return state.shoeReducer.listShoe;
  });

  let dispatch = useDispatch();

  // hàm add
  const handleAddToCart = (shoes) => {
    dispatch(AddToCart(shoes));
  };

  //   render sản phẩm
  const renderListProduct = () => {
    return listShoe.map((shoes) => {
      return (
        <div className="col-4" key={shoes.id}>
          <div class="card">
            <img class="card-img-top" src={shoes.image} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">{shoes.name}</h4>
              <p class="card-text">{shoes.price} $</p>
              <button
                className="btn btn-danger "
                data-bs-toggle="modal"
                data-bs-target="#modalId"
                onClick={() => handleAddToCart(shoes)}
              >
                {" "}
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row g-4 mt-5">{renderListProduct()}</div>
    </div>
  );
}
