import React from "react";
import Table from "./Table";

const UserDetails = () => {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-10 py-2">
            <span className="text-gray-200">First Name</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Last Name</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Gender</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Birthday</span>
          </th>
          <th className="px-10 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <Table />
      </tbody>
    </table>
  );
};

export default UserDetails;
