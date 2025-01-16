import { useFormik } from "formik";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messageSlice";

const ChatWindow = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messageReducer);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.message.trim()) {
        dispatch(addMessage({ message: values.message }));
      }
      resetForm();
    },
  });

  return (
    <>
      <div className="h-[90vh]">
        <div className=" h-[85vh] mt-4 mx-3 flex gap-3">
          <div className="grow-[1] p-5 bg-slate-700 rounded-3xl">
            <h1 className="text-white">User sidebar</h1>
          </div>
          <div className="grow-[4] relative bg-slate-700 rounded-2xl">
            <div className="h-[73vh] absolute top-0 w-[100%] p-5 flex flex-col justify-end">
              <div>
                {messages.map((values, index) => {
                  return (
                    <h1
                      key={index}
                      className="bg-green-800 w-fit text-white text-lg py-1 px-4 rounded-3xl my-1"
                    >
                      {values}
                    </h1>
                  );
                })}
              </div>
            </div>
            <form
              className="h-[12vh] absolute bottom-0 w-[100%] px-5 flex items-center border-t-4 border-slate-800 gap-3"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                name="message"
                id="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                placeholder="Enter text"
                className="w-[100%] bg-transparent rounded-3xl border border-gray-400 h-[7vh] text-white text-lg px-5 "
              />
              <button className="text-[2rem] text-gray-400" type="submit">
                <IoSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWindow;
