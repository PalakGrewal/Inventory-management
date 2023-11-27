import React from "react";

const Inventory = () => {
  return (
    <section className="inventory">
      <div>
        <input type="text" placeholder="Search Word" />
        <button type="submit">Search</button>
      </div>
      <div>
        <h3>Inventory</h3>
        <h5>Filter</h5>
        <h5>New Item</h5>
        <h5>Edit</h5>
      </div>
      <div>
        <h2 className="text-xl font-semibold">
          Inventory
        </h2>
        <ul className="list-style-type: none
  padding-left: 0">
          <li className="mb-2">
            Filter
          </li>
          <li className="mb-2">
            New Item
          </li>
          <li className="mb-2">
            Edit
          </li>
        </ul>
      </div>
      <div>
        <table className="w-full border-separate border-spacing-2 border-gray-200">
          <thead
            className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
          >
            <tr
              className=":nth-child(even) {
    background-color: #f3f4f6;
  }"
            >
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Photo
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Name
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Purchasing Price
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Selling Price
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                On-Hand Units
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Unit
              </th>
              <th
                className="p-2
  font-semibold
  text-left
  border-b border-gray-200"
              >
                Updated
              </th>
            </tr>
          </thead>
          <tbody>{/* Table content goes here */}</tbody>
        </table>
      </div>
    </section>
  );
};

export default Inventory;
