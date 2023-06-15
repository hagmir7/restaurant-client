import React, { useEffect, useState } from "react";
import Request from "../utils/Request";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Spin, Tooltip, Popconfirm, Button } from "antd";
import ProductCreate from "../components/products/ProductCreate";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState();

  useEffect(() => {
    Request.get("/product/list", {})
      .then((response) => {
        const products = response.data.items;
        setData(products);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);


  const confirm = () =>{

  }

  return (
    <div className="container">
      <h1 className="h4">Products list</h1>
      <ProductCreate />
      <table className="table table-striped">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((product) => (
                <tr key={product._id}>
                  {/* <td>{product._id}</td> */}
                  <td>{product.name}</td>
                  <td>{product.price} MAD</td>
                  <td>
                    {product.status ? (
                      <Tooltip placement="top" title="In Stock / Available">
                        <Button className="text-success">
                          <CheckCircleOutlined />{" "}
                        </Button>
                      </Tooltip>
                    ) : (
                      <Tooltip placement="top" title="Not in stock">
                        <Button className="text-danger">
                          <WarningOutlined />{" "}
                        </Button>
                      </Tooltip>
                    )}
                  </td>
                  <td>{product.category && product.category.name}</td>
                  <td>
                  <Popconfirm title="Delete product"
                        description="Are you sure to delete this product?"
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                      >
                      <button className="btn btn-danger btn-sm mx-1">
                        <DeleteOutlined />
                      </button>
                  </Popconfirm>
                    <Link to={`/product/update/${product._id}`} className="btn btn-sm btn-success mx-1">
                      <EditOutlined />
                    </Link>
                  </td>
                </tr>
              ))
            :   null
            }
        </tbody>
      </table>

      { !data && <div className="d-flex justify-content-center my-5 py-5">  <Spin /> </div>}
    </div>
  );
}
