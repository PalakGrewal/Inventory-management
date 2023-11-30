
import H1 from "../Styles/H1";
import Hgray from "../Styles/Hgray";

const data = [
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Air Conditioner",
    pur_price: 20000,
    sell_price: 30000,
    onhand_units: "20",
    sold_units:"50",
    units: "pcs",
    updated: "Yes",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Refrigerator",
    pur_price: 15000,
    sell_price: 20000,
    onhand_units: "10",
    sold_units:"30",
    units: "pcs",
    updated: "Yes",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Wall Decor Mirrors",
    pur_price: 1000,
    sell_price: 2000,
    onhand_units: "60",
    sold_units:"40",
    units: "pcs",
    updated: "",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "20 Wall Posters",
    pur_price: 1500,
    sell_price: 2200,
    onhand_units: "30",
    sold_units:"70",
    units: "pcs",
    updated: "",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "",
    pur_price: 10,
    sell_price: 20,
    onhand_units: "",
    sold_units:"",
    units: "pcs",
    updated: "",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Item A",
    pur_price: 10,
    sell_price: 20,
    onhand_units: "",
    sold_units:"",
    units: "pcs",
    updated: "",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Item A",
    pur_price: 10,
    sell_price: 20,
    onhand_units: "",
    sold_units:"",
    units: "pcs",
    updated: "",
  },
  {
    prod_image:
      "https://dukaan.b-cdn.net/700x700/webp/786890/269f0e92-5de9-4b8c-aa2c-740359619486.png",
    Name: "Item A",
    pur_price: 10,
    sell_price: 20,
    onhand_units: "",
    sold_units:"",
    units: "pcs",
    updated: "",
  },
];


const TableInventory = () => {
  return (
    <div>
      <H1 data="Inventory data"></H1>
      <table className="pl-8 pt-8 w-max-80">
        <thead>
          <tr>
            <td className="p-2">
              <Hgray data="Product Image">Product Image</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Item Name">Item Name</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Purchasing Price">Purchasing Price</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Selling Price">Selling Price</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="On-hand Units">On-hand Units</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Sold Units">Sold Units</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Units">Units</Hgray>
            </td>
            <td className="p-2">
              <Hgray data="Updated">Updated</Hgray>
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, key) => (
            <tr key={key} className="hover:bg-gray-200 rounded-lg">
              <td className="p-2">
                <img
                  className="rounded-lg"
                  src={value.prod_image}
                  alt={`Product ${key + 1}`}
                  style={{ width: "50px", height: "50px" }}
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
  );
};

export default TableInventory;
