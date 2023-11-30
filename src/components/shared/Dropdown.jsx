import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  const customersTypes = [
    {
      name: "All Customers",
    },
    {
      name: "Active Customers",
    },
    {
      name: "Inactive Customers",
    },
    {
      name: "CRM Customers",
    },
    {
      name: "New Customers",
    },
    {
      name: "Duplicate Customers",
    },
    {
      name: "Overdue Customers",
    },
    {
      name: "Unpaid Customers"
    }
  ];
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex mt-5 w-full ml-5 border-0 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          All Customers
          <ChevronDownIcon
            className="-mr-1 h-10 w-9 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-3 ml-5 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-40 overflow-y-auto">
          <div className="py-2">
            {customersTypes.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-xl"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
