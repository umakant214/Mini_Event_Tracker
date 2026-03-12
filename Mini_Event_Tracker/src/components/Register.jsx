import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(16),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = async (data) => {
    const res = await axios.post("http://localhost:3000/api/register", data);
    if (res.data.success == true) {
      Swal.fire({
        title: "Registration",
        text: res?.data?.message,
        icon: "success",
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Registration",
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
            <h2 className="text-center mb-4">Register Here !</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                className="form-control mb-3"
              />
              {errors.name && (
                <p className="text-danger">{errors.name?.message}</p>
              )}
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Your Email"
                className="form-control mb-3"
              />
              {errors.email && (
                <p className="text-danger">{errors.email?.message}</p>
              )}
              <input
                {...register("password")}
                type="text"
                placeholder="Enter Your Password"
                className="form-control mb-3"
              />
              {errors.password && (
                <p className="text-danger">{errors.password?.message}</p>
              )}
              <input
                type="submit"
                value="Register Here"
                className="form-control mb-3 btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
