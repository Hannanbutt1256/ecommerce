import { RegisterInterface } from "../../types/auth";
import { registerSchema } from "../../validation/authSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<RegisterInterface> = async (data) => {
    console.log(data, "");

    const newData = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    };
    console.log("Form Submitted:", newData);

    try {
      const response = await axios.post(
        "https://server-eight-tau.vercel.app/api/register",
        newData
      );
      console.log("Registration successful:", response.data);
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" rounded-xl p-6 md:px-20 w-fit border-2 border-white shadow-gray-600 shadow-xl ">
        <h2 className="text-center p-3 text-2xl font-bold  ">Sign Up</h2>
        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("userName")}
              type="text"
              className=" border-2 outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Username"
            />
            {errors.userName && (
              <p className="text-red-600">{errors.userName.message}</p>
            )}
          </div>

          <div className="">
            <input
              {...register("email")}
              type="email"
              className=" border-2 outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="">
            <input
              {...register("password")}
              type="password"
              className=" border-2 outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div className="">
            <input
              {...register("confirmPassword")}
              type="password"
              className=" border-2 outline-none p-2 pr-16 rounded-xl m-2 "
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p className="text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="p-2 px-4 rounded-full m-2 bg-black text-white text-lg font-medium"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
