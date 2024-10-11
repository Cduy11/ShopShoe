import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase, RemoveItem } from "../../redux/action";
import { Button, message, Popconfirm } from "antd";
export default function ModalCart() {
  // Lấy dữ liệu từ redux về
  let data = useSelector((state) => state.shoeReducer.cart);

  const dispatch = useDispatch();

  // hàm xoá
  const handeleRemove = (id) => {
    dispatch(RemoveItem(id));
  };

  // hàm tăng
  const handeleIncrease = (id) => {
    dispatch(Increase(id));
  };

  // hàm giảm
  const handleDecrease = (id, quantity) => {
    if (quantity === 1) {
      // Khi sản phẩm có số lượng là 1 và giảm nữa sẽ hiện Popconfirm để xác nhận xoá
      message.warning("Số lượng đã về 0. Bạn có muốn xoá sản phẩm không?");
      dispatch(Decrease(id));
    } else {
      dispatch(Decrease(id));
    }
  };

  // hàm tính tổng tiền
  const totalPrice = () => {
    return data.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  // Render giỏ hàng
  const renderCart = () => {
    return data.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img
              src={item.image}
              alt={item.name}
              className="img-fluid"
              style={{ maxHeight: "80px" }}
            />
          </td>
          <td>
            <Popconfirm
              title="Xoá sản phẩm"
              description="Số lượng sản phẩm đã về 0. Bạn có chắc chắn muốn xoá sản phẩm này không?"
              onConfirm={() => handeleRemove(item.id)}
              onCancel={() => message.info("Sản phẩm không được xoá")}
              okText="Có"
              cancelText="Không"
              visible={item.quantity === 0}
            >
              <button
                className="btn btn-warning"
                onClick={() => handleDecrease(item.id, item.quantity)}
              >
                -
              </button>
            </Popconfirm>
            {item.quantity}{" "}
            <button
              className="btn btn-info"
              onClick={() => handeleIncrease(item.id)}
            >
              +
            </button>
          </td>
          <td>{(item.quantity * item.price).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handeleRemove(item.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="modalTitleId">
                My Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>{renderCart()}</tbody>
                </table>
                <h3>Tổng Tiền: {totalPrice()} $</h3>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
