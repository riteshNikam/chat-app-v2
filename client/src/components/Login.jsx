import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/userSlice";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password.trim()) {
    errors.password = "Required";
  }

  return errors;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(login());
      navigate("/", { replace: true });
    },
    validate,
  });

  return (
    <>
      <div className="px-44 h-[90vh] flex justify-center items-center">
        <div className="flex justify-between gap-10">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold text-white">
              Login to get started
            </h1>
          </div>
          <form
            action=""
            className="p-8 bg-slate-700 custom-box-shadow flex-grow w-[540px]"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col mt-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-[6vh] rounded-lg px-3 text-md mt-2"
                placeholder="Enter email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                text-5xl
                font-bold
                text-white
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-xs font-extralight text-red-600 mt-1 italic">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                className="h-[6vh] rounded-lg px-3 text-md mt-2"
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-xs font-extralight text-red-600 italic mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex">
              <button
                type="submit"
                className="mt-5 border py-2 px-5 rounded-md text-white font-bold border-transparent bg-blue-500 hover:bg-blue-700"
              >
                Login
              </button>
            </div>

            <Link to={"/register"}>
              <p className="text-blue-300 hover:underline mt-2">
                Don't have an account? Click here.
              </p>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
