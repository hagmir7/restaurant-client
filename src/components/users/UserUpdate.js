import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Request from "../../utils/Request";
import { LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";

export default function UserUpdate() {
  const { id } = useParams();
  const [user, setUser] = useState({})
  const [roles, setRoles] = useState(null);
  const [ spenner, setSpeener] = useState(false);


  const handleInputChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };


  useEffect(() => {
    Request.get(`user/${id}`, {})
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    Request.get('role/list', {})
      .then((response) => {
        console.log(response.data)
        setRoles(response.data);
      })
      .catch((error) => {});
  }, []);

  
  const formToJSON = (formData) => {
    const json = {};
    for (let [key, value] of formData.entries()) {
      json[key] = value === "" ? null : value;
    }
    return json;
  };


  const updateUser = (e) => {
    e.preventDefault();
    setSpeener(true)
    const form = new FormData(e.target);
    console.log(formToJSON(form))
    Request.put(`user/update/${id}`, formToJSON(form))
      .then((response) => {
        message.success("User updated successfully.")
        setSpeener(false)
      })
      .catch((error) => {
        setSpeener(false)
      });
  };
  


  return (
    <div className="row">
      <div className="col-md-6">
        <h1 className="h4 mb-3">Update user info</h1>
        <form onSubmit={updateUser}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            value={user.firstName}
            name="firstName"
            className="form-control form-control-sm mb-2"
            onChange={handleInputChange}
            required
            placeholder="First name"
          />
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            value={user.lastName}
            name="lastName"
            className="form-control form-control-sm mb-2"
            onChange={handleInputChange}
            required
            placeholder="Last name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="form-control form-control-sm mb-2"
            onChange={handleInputChange}
            required
            placeholder="Email"
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            className="form-control form-control-sm mb-2"
            onChange={handleInputChange}
            placeholder="Phone"
          />
          <label htmlFor="role">Role</label>
          <select name="role" required className="form-select form-select-sm">
            <option value="">Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Server">Server</option>
            <option value="Delivry Man">Delivry Man</option>
          </select>
          <button
            type="submit"
            className="btn btn-outline-success btn-sm w-100 mt-3"
          >
            {spenner ? <LoadingOutlined /> : "Update"}
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body p-0">
            <div className="d-flex flex-column align-items-center text-center mt-2">
              {" "}
              <img
                src={`http://localhost:3001/${user.avatar}`}
                alt="Admin"
                className="rounded-circle border"
                width="100"
              />
            <h1 className="h5">{user.firstName} {user.lastName}</h1>
            </div>
            <div className="mt-3">
                <div className="card-body p-0">
                  <hr />
                  <div className="row px-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> {user.firstName} {user.lastName}</div>
                  </div>
                  <hr />
                  <div className="row px-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> {user.email}</div>
                  </div>
                  <hr />
                  <div className="row px-2">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> {user.phone}</div>
                  </div>
                  <hr />
                  <div className="row px-2 mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Role</h6>
                    </div>
                    <div className="col-sm-9 text-secondary"> {user.role ? user.role : "Costumer"}</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
