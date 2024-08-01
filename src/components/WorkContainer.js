import React from "react";

class WorkContainer extends React.Component {
  render() {
    return (
      <div className="container h-auto flex h-64 content-wrapper w-100 justify-between">
        <div
          className="side-nav-bar h-100 flex flex-col px-6 py-6 bg-gray-800 shadow-xl justify-start items-left w-1/4"
          style={{ background: "#2e2e38" }}
        >
          <div className="container bg-gray-400 p-2 my-6 text-gray-800 rounded-md shadow-xl">
            <h3>Welcome</h3>
            <p></p>
          </div>
          <a
            href="/"
            className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-home" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              Existing user login
            </span>
          </a>
          <a
            href="/"
            className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-ticket-alt" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              policy
            </span>
          </a>
          <a
            href="/"
            className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-ticket-alt" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              chat with us
            </span>
          </a>
          <a
            href="/"
            className="my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-chart-area" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              Reports
            </span>
          </a>
        </div>
        <div className="right-content w-3/4 p-10">
          <h1 className="mt-3 bg-gray-400 p-2 my-6 text-gray-600  shadow-sm">
            <span>NEW CUSTOMER LOGIN</span>
          </h1>
          <div className="container-options">
            <form action="" className="m-4">
              {/* <!-- Issue Source  --> */}

              <div className="issue-source bg-gray-100 shadow-xl p-6 mt-4 mb-4 flex flex-col items-start justify-center">
                <h2>
                  <span className="py-1 px-0 text-gray-600 border-solid border-indigo-600 border-b-2 uppercase font-semibold text-xs"></span>
                </h2>
                <div className="mt-8"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="hidden sm:block">
                  <img className="w-full h-full object-cover" alt="" />
                </div>

                <div className="bg-gray-800 flex flex-col justify-center">
                  <form className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
                    <h2 className="text-4xl dark:text-white font-bold text-center"></h2>
                    <div className="flex flex-col text-gray-400 py-2">
                      <label>Enter your name</label>
                      <input
                        className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                      <label>Enter your phone number</label>
                      <input
                        className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between text-gray-400 py-2">
                      <p className="flex items-center">
                        <input className="mr-2" type="checkbox" /> Remember Me
                      </p>
                      <p>Forgot Password</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                      SIGNIN
                    </button>
                  </form>
                </div>
              </div>

              {/* <!-- Issue Types --> */}

              <div className="issue-type h- bg-gray-100 shadow-xl p-6 mt-4 mb-4 flex flex-col items-start justify-center">
                <h2>
                  <span className="py-1 px-0 text-gray-600 border-solid border-indigo-600 border-b-2 font-semibold text-xs uppercase">
                    Issue Type
                  </span>
                </h2>
                <div className=" mt-8 issue-type-wrapper  flex justify-between items-center flex-wrap">
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    EMD
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    Java
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    Reverse Auction
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    Tender Creation
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    User Transfer
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    DSC De-activation
                  </a>
                  <a
                    href="/"
                    className="bg-gray-300 px-6 rounded py-2 shadow-md ml-0 mr-3 mb-3 text-gray-600 hover:bg-indigo-600 hover:text-gray-100 transition duration-700 ease-in-out "
                  >
                    Remote Access
                  </a>
                </div>
              </div>

              <button className="bg-indigo-600 shadow-xl px-10 py-3 mt-4 mb-4 rounded text-gray-100 submitBtn">
                Submit
              </button>

              <div
                className="flex items-center bg-indigo-500 text-white text-sm font-bold px-4 py-3 rounded hidden success-alert transition ease-in-out"
                role="alert"
              >
                <svg
                  className="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
                </svg>
                <p>Issue added sucessfully !!!!</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkContainer;
