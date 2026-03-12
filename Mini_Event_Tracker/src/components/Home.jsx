import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get("http://localhost:3000/api/get-events", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(res.data.data);
  };

  const handleDelete = async (id) => {
    const isSure = confirm("Are You Sure");
    if (isSure) {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(
        `http://localhost:3000/api/delete-event/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (res?.data?.success == true) {
        Swal.fire({
          title: "Deleted Event",
          text: res?.data?.message,
          icon: "success",
        });
      }
      fetchData();
    }
  };

  const handleEdit = (item) => {
    nav("/edit", {
      state: item,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 mx-auto mt-3">
            <h2 className="text-center mb-3">Event List</h2>

            <table className="table border">
              <thead className="table-dark">
                <tr>
                  <th>Sr</th>
                  <th>Title</th>
                  <th>Date & Time</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.Title}</td>
                      <td>{new Date(item.dateTime).toLocaleString()}</td>
                      <td>{item.Location}</td>
                      <td>{item.OptionDes}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-danger me-2"
                        >
                          Delete
                        </button>

                        <button
                          onClick={() => handleEdit(item)}
                          className="btn btn-warning"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
