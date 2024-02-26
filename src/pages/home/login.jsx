import { Logo } from "../../assets/auth";

const Login = () => {
  return (
    <div className="bg-blue-dark min-h-screen">
      <div className="flex flex-col items-center bg-Vector2  justify-between min-h-screen   mx-auto ">
        <div className="flex flex-col h-auto w-full m-auto md:w-[60%] z-[10]">
          <h1 className="md:text-[2rem] text-[1rem] text-center gilory-semibold  text-white md:tracking-[1px] amiko-b">
            Login
          </h1>

          <div className="input-wrapper w-[90%] md:w-[40%] flex flex-col items-left justify-center mx-auto mt-4">
            <label className="text-white text-left mb-1">Email address</label>
            <input
              type="text"
              placeholder="Email"
              className="text-white rounded-lg p-3 border bg-transparent w-full  border-[#575757]"
            />
          </div>

          <div className="input-wrapper w-[90%] md:w-[40%] flex flex-col items-left justify-center mx-auto mt-4">
            <label className="text-white text-left mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="text-white rounded-lg p-3 border bg-transparent w-full  border-[#575757]"
            />
          </div>

          <div className="input-wrapper w-[90%] md:w-[40%]  flex flex-col items-left justify-center mx-auto mt-6">
            <button className="btn w-full bg-tiffany-blue gilory-semibold rounded-md py-2 text-white ">
              <p className="uppercase text-xl ">LOGIN </p>
            </button>
            s
          </div>
        </div>
      </div>
    </div>
  );
};
export { Login };
