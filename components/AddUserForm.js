import React from "react";

const AddUserForm = () => {
  return (
    <form className="grid lg:grid-cols-2 w-3/4 gap-4">
      <div className="input-type">
        <input
          type="text"
          placeholder="Firstname"
          id="firstname"
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md my-2"
        />
      </div>

      <div className="input-type">
        <input
          type="text"
          placeholder="Lastname"
          id="lastname"
          name="lastname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md my-2"
        />
      </div>

      <div className="input-type">
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md my-2"
        />
      </div>
      <div className="input-type">
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          className="border w-full px-5 py-3 focus:outline-none rounded-md my-2"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          id="dob"
          name="dob"
          className="border px-5 py-3 focus:outline-none rounded-md my-2"
        />
      </div>

      <div className="flex gap-10 items-center my-2 mx-2">
        <div className="form-check my-2">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none tranition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="male" className="inline-block text-gray-800">
            Male
          </label>
        </div>
        <div className="form-check my-2">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none tranition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="female" className="inline-block text-gray-800">
            Female
          </label>
        </div>
        <div className="form-check my-2">
          <input
            type="radio"
            id="others"
            name="gender"
            value="others"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none tranition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          />
          <label htmlFor="others" className="inline-block text-gray-800">
            Others
          </label>
        </div>
      </div>

      <button
        className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-gray-50 hover:border-green-500 
      hover:text-green-500"
      >
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default AddUserForm;
