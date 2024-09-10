import React from "react";

const FilesPage = () => {
  return (
    <div className="h-screen">
      <div className="p-12">
        <p className="text-center text-4xl p-10 font-bold text-blue-400">
          Your Uploaded Documents Are Down Below
        </p>
        <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Document name
              </th>
              {/* <th scope="col" className="px-6 py-3">
                        Color
                    </th> */}
              <th scope="col" className="px-6 py-3">
                Document
              </th>
              <th scope="col" className="px-6 py-3">
                Document Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                James Anderson
              </th>

              <td className="px-6 py-4">Pan Card</td>
              <td className="px-6 py-4">KLPNMDGH</td>
              <td className="px-6 py-4 grid grid-cols-2 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Mark Yensen
              </th>

              <td className="px-6 py-4">Aadhar</td>
              <td className="px-6 py-4">615782365728910</td>
              <td className="px-6 py-4 grid grid-cols-2 ">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilesPage;
