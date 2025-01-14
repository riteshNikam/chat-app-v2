import { useFormik } from "formik";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  const errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = "Required";
  } else if (values.firstname.length > 20) {
    errors.firstname = "Must be 20 characters or less";
  }

  if (!values.lastname.trim()) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 20) {
    errors.lastname = "Musr be 20 characters or less";
  }

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

const Register = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="flex justify-center h-[90vh] items-center p-44">
        <div className="flex justify-between gap-10">
          <div className="flex items-center">
            <h1 className="text-5xl font-bold text-white">
              Register yourself to get started...
            </h1>
          </div>
          <form
            action=""
            className="border-2 p-8 bg-slate-700 rounded-2xl"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="fullname" className="text-white">
                Full Name
              </label>
              <div className="flex gap-4 mt-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="h-[6vh] rounded-lg px-3 text-md"
                    placeholder="Enter first name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <p className="text-xs font-extralight bg-red-600 italic">
                      {formik.errors.firstname}
                    </p>
                  ) : null}
                  <label
                    htmlFor="firstname"
                    className="text-xs mt-1 text-gray-400"
                  >
                    First Name
                  </label>
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="h-[6vh] rounded-lg px-3 text-md"
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <p className="text-xs font-extralight bg-red-600 italic">
                      {formik.errors.lastname}
                    </p>
                  ) : null}
                  <label
                    htmlFor="lastname"
                    className="text-xs mt-1 text-gray-400"
                  >
                    Last Name
                  </label>
                </div>
              </div>
            </div>

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
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-xs font-extralight bg-red-600 italic">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col mt-2">
              <label htmlFor="username" className="text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="h-[6vh] rounded-lg px-3 text-md mt-2"
                placeholder="Enter username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <p className="text-xs font-extralight bg-red-600 italic">
                  {formik.errors.username}
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
                <p className="text-xs font-extralight bg-red-600 italic">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex">
              <button
                type="submit"
                className="mt-5 border py-2 px-5 rounded-md text-white font-bold border-transparent bg-blue-500 hover:bg-blue-700"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
