import React, { useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from "react-query";
export default function Table () {

  let data= {}
  useEffect(() => {
    data = getUsers()
    //  eslint-disable-next-line
  }, []);
  

  console.log(data)

  // const { data} = useQuery('employee', getUsers)
  // {data.map((data) => {
  return (
    <tr className="bg-gray-100 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        <span className="text-center ml-2 font-semibold">Soub</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="text-center ml-2 font-semibold">Das</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="text-center ml-2 font-semibold">soub@email.com</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="text-center ml-2 font-semibold">Male</span>
      </td>
      <td className="px-16 py-2 ">
        <span className="text-center ml-2 font-semibold">2022-09-02</span>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor">
          <BiEdit size={25} color="green"></BiEdit>
        </button>
        <button className="cursor">
          <BiTrash size={25} color="red"></BiTrash>
        </button>
      </td>
    </tr>
  );
  // })}
};

// export default Table;
