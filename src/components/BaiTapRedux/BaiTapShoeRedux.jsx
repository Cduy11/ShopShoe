import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalCart from "./ModalCart";
import { useSelector } from "react-redux";

export default function BaiTapShoeRedux() {
  // Lấy dữ liệu giỏ hàng từ Redux
  let data = useSelector((state) => state.shoeReducer.cart);

  return (
    <div>
      <h3 className="text-center text-success bg-light p-4">
        SHOP SHOES REDUX
      </h3>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center", // Đổi 'end' thành 'center' để căn giữa
        }}
      >
        {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
        <ShoppingCartOutlined
          style={{ fontSize: "50px" }}
          data-bs-toggle="modal"
          data-bs-target="#modalId"
        />
        <span style={{ marginLeft: "-25px", marginTop: "-8px", color: "red" }}>
          {data.length}
        </span>
      </div>
      <DanhSachSanPham />
      <ModalCart />
    </div>
  );
}
