import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
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
    const res = await axios.post("http://localhost:3000/api/login", data);
    if (res.data.success == true) {
      Swal.fire({
        title: "Login",
        text: res?.data?.message,
        icon: "success",
      });
      navigate("/create");
      localStorage.setItem("token", JSON.stringify(res?.data?.token));
    } else {
      Swal.fire({
        title: "Login",
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
            <h2 className="text-center mb-4">Login Here !</h2>
            <form onSubmit={handleSubmit(handleRegister)}>
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
                value="Login Here"
                className="form-control mb-3 btn btn-primary"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
