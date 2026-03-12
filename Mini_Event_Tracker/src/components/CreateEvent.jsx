import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const createEvent = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    Title: yup.string().required("Title is required"),
    dateTime: yup.string().required("Date & Time is required"),
    Location: yup.string().required("Location is required"),
    OptionDes: yup.string().required("Description is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data) => {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.post("http://localhost:3000/api/create", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.data.success == true) {
      Swal.fire({
        title: "Event",
        text: res?.data?.message,
        icon: "success",
      });
      navigate("/view");
    } else {
      Swal.fire({
        title: "Event",
        text: res?.data?.message,
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mx-auto p-4 border rounded shadow-sm">
            <h2 className="text-center mb-4">Create Event !</h2>

            <form onSubmit={handleSubmit(handleRegister)}>
              <input
                {...register("Title")}
                type="text"
                placeholder="Enter Event Title"
                className="form-control mb-3"
              />
              {errors.Title && (
                <p className="text-danger">{errors.Title?.message}</p>
              )}

              <input
                {...register("dateTime")}
                type="datetime-local"
                className="form-control mb-3"
              />
              {errors.dateTime && (
                <p className="text-danger">{errors.dateTime?.message}</p>
              )}

              <input
                {...register("Location")}
                type="text"
                placeholder="Enter Event Location"
                className="form-control mb-3"
              />
              {errors.Location && (
                <p className="text-danger">{errors.Location?.message}</p>
              )}

              <input
                {...register("OptionDes")}
                type="text"
                placeholder="Enter Event Description"
                className="form-control mb-3"
              />
              {errors.OptionDes && (
                <p className="text-danger">{errors.OptionDes?.message}</p>
              )}

              <input
                type="submit"
                value="Create Here"
                className="form-control mb-3 btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default createEvent;
