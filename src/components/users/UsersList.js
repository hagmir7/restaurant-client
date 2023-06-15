import { useEffect, useState } from "react";
import Request from "../../utils/Request";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, message, Popconfirm } from 'antd';




const UsersList = () => {


  const [user, setUser] = useState([{}]);

  useEffect(() => {
    Request.get(`/user/list?limit=${10}&page=${1}`, {})
      .then((response) => {
        setUser(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const confirm = () =>{

  }



  return (
    <div>
      <Link className="btn btn-outline-success btn-sm mb-2">Create User</Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr>
                <th scope="row">1</th>
                <td>{ item.firstName } { item.lastName }</td>
                <td>{ item.email }</td>
                <td>{ item.role }</td>
                <td>
                  <Link to={`/user/update/${item._id}`} className="btn btn-success btn-sm mx-1">
                    <EditOutlined />
                  </Link>
                  <Popconfirm
                      title="Delete user"
                      description="Are you sure to delete this user?"
                      onConfirm={confirm}
                      okText="Yes"
                      cancelText="No"
                    >
                      <button className="btn btn-danger btn-sm mx-1"><DeleteOutlined /></button>
                </Popconfirm>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;
