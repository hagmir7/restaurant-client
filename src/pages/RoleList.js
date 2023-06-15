import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from "antd";
import Request from "../utils/Request";

export default function RoleList() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    Request.get("role/list", {})
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        message.error(error.response.data.message);
      });
  }, []);

  const confirm = () => {};

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <table class="table table-striped border">
          <thead>
            <tr>
              <th scope="col"># ID</th>
              <th scope="col">Role</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((item) => {
              return (
                <tr>
                  <th scope="row">{item._id}</th>
                  <td>{item.name}</td>
                  <td>
                      <Link to={`/user/update/${item._id}`} className="btn btn-success btn-sm mx-1">
                        <EditOutlined />
                      </Link>
                    <Popconfirm title="Delete user"
                        description="Are you sure to delete this user?"
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                      >
                      <button className="btn btn-danger btn-sm mx-1">
                        <DeleteOutlined />
                      </button>
                    </Popconfirm>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
