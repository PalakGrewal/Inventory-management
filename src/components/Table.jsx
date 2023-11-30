import React from "react";
import H1 from "../Styles/H1";
import Hgray from "../Styles/Hgray";

const TopSelling = [
  {
    name: "Item A",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 10,
    Onhand: 20,
    units: "pcs",
  },
  {
    name: "Item B",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 15,
    Onhand: 25,
    units: "pcs",
  },
  {
    name: "Item C",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 8,
    Onhand: 18,
    units: "pcs",
  },
  {
    name: "Item D",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 12,
    Onhand: 30,
    units: "pcs",
  },
  {
    name: "Item E",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 5,
    Onhand: 15,
    units: "pcs",
  },
];
const HighDemand = [
  {
    name: "Item A",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 10,
    Onhand: 20,
    units: "pcs",
  },
  {
    name: "Item B",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 15,
    Onhand: 25,
    units: "pcs",
  },
  {
    name: "Item C",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 8,
    Onhand: 18,
    units: "pcs",
  },
  {
    name: "Item D",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 12,
    Onhand: 30,
    units: "pcs",
  },
  {
    name: "Item E",
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    itemsold: 5,
    Onhand: 15,
    units: "pcs",
  },
];

function Table() {
  return (
    <div className="flex flex-wrap gap-6">
      <div className="p-4 basis-1/2" >
        <H1 data="Top selling items"></H1>
        <table className="pl-8 pt-8 text-4xl">
          <thead className="">
            <tr>
              <td className="p-2">
                <Hgray data="Photo">Product Image</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="Item Name">Item Name</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="Items Sold">Items Sold</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="On Hand">On Hand</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="Units">Units</Hgray>
              </td>
            </tr>
          </thead>
          <tbody>
            {TopSelling.map((value, key) => (
              <tr key={key} className="hover:bg-gray-200 rounded-lg">
                <td className="p-2">
                  <img
                    className="rounded-lg"
                    src={value.prod_image}
                    style={{ width: "60px", height: "60px" }}
                  />
                </td>
                <td className="p-2 text-base text-center">{value.name}</td>
                <td className="p-2 text-base text-center">{value.itemsold}</td>
                <td className="p-2 text-base text-center">{value.Onhand}</td>
                <td className="p-2 text-base text-center">{value.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 ">
      <H1 data="High Demand is Expected"></H1>
        <table className="pl-8 pt-8 text-4xl">
          <thead className="">
            <tr>
              <td className="p-2">
                <Hgray data="Photo">Photo</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="Item Name">Item Name</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="On Hand">On Hand</Hgray>
              </td>
              <td className="p-2">
                <Hgray data="Units">Units</Hgray>
              </td>
            </tr>
          </thead>
          <tbody>
            {HighDemand.map((value, key) => (
              <tr key={key} className="hover:bg-gray-200 rounded-lg">
                <td className="p-2">
                  <img
                    className="rounded-lg"
                    src={value.prod_image}
                    style={{ width: "60px", height: "60px" }}
                  />
                </td>
                <td className="p-2 text-sm text-center">{value.name}</td>
                <td className="p-2 text-sm text-center">{value.Onhand}</td>
                <td className="p-2 text-sm text-center">{value.units}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;