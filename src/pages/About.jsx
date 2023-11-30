import React from "react";

const About = () => {
  return (
    <div className="h-[88vh] overflow-y-scroll p-10 w-full">
      <div>
        <div
          className="h-52 ml-48 float-left  
                            -mt-10 w-96 flex-col  
                            rounded-xl bg-white bg-clip-border  
                            text-gray-700 shadow-2xl"
        >
          <div className="p-6">
            <h5
              className="text-center mr-4 mb-2  
                                   block font-sans text-xl  
                                   font-semibold text-blue-gray-900  
                                   antialiased"
            >
              Reach Us At
            </h5>
            <ul>
              <li className="mt-2">
                <span>
                  <i className="fa fa-phone mr-2"></i>{" "}
                </span>
                +91-9998887776
              </li>
              <li className="mt-2">
                <span>
                  <i className="fa fa-envelope mr-2"></i>{" "}
                </span>
                <span>feedback@geeksforgeeks.org</span>
              </li>
              <li className="mt-2">
                <span>
                  <i className="fa-solid fa-map-pin mr-2"></i>
                </span>
                A-143, 9th Floor, Sovereign Corporate
                <span className="pl-4">
                  Tower, Sector-136, Noida, Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="absolute mt-52 ml-48  
                        w-80 float-left border-2 p-2  
                        rounded-xl shadow-xl text-xl"
      >
        <form>
          <p className="text-2xl">Feedback & Queries</p>
          <div>
            <label className="text-sm">Select Issue*</label>
            <br></br>
            <select
              className="bg-gray-50 border border-gray-300  
                                        text-gray-600 text-sm rounded-lg  
                                        focus:border-blue-500 w-full p-2.5"
            >
              <option value="Feedback">-- Select Your Query --</option>
              <option value="Feedback">Feedback</option>
              <option value="Feedback">Course Related Queries</option>
              <option value="Feedback">Payment Related Issue</option>
              <option value="Feedback">Hiring Related Queries</option>
              <option value="Feedback">Advertise With Us</option>
            </select>
            <br></br>
            <label className="text-sm">Email Address*</label>
            <br></br>
            <input
              className="bg-gray-50 border border-gray-300  
                                        text-sm rounded-lg focus:border-blue-500 
                                        w-full p-2.5"
              type="email"
              placeholder="abc@geeksforgeeks.org"
            />
            <br></br>
            <label className="text-sm">Contact No.</label>
            <br></br>
            <input
              className="bg-gray-50 border border-gray-300 
                                        text-sm rounded-lg focus:border-blue-500  
                                        w-full p-2.5"
              type="text"
              placeholder="1324567890"
            />
            <br></br>
            <label className="text-sm">Drop Your Query</label>
            <br></br>
            <textarea
              className="bg-gray-50 border border-gray-300  
                                            text-sm rounded-lg  
                                            focus:border-blue-500  
                                            w-full p-2.5"
              rows="4"
              cols="25"
              maxlength="300"
              placeholder="Max Allowed Characters: 300"
            ></textarea>
            <br></br>
            <button
              className="bg-blue-500 hover:bg-blue-700  
                                        text-white font-bold  
                                        py-2 px-4 rounded"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
