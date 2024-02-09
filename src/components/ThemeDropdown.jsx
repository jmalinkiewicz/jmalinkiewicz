import { useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Desktop from "../assets/Desktop";
import Moon from "../assets/Moon";
import Sun from "../assets/Sun";
import setTheme from "../utils/setTheme";

const options = [
  {
    id: 1,
    name: "Light",
    unavailable: false,
    icon: <Sun />,
  },
  {
    id: 2,
    name: "Dark",
    unavailable: false,
    icon: <Moon />,
  },
  {
    id: 3,
    name: "System",
    unavailable: false,
    icon: <Desktop />,
  },
];

function ThemeDropdown() {
  const [selected, setSelected] = useState(() => {
    if (localStorage.theme === "light") {
      return options[0];
    } else if (localStorage.theme === "dark") {
      return options[1];
    } else {
      return options[2];
    }
  });

  useEffect(() => {
    if (selected.name === "Light") {
      localStorage.theme = "light";
    } else if (selected.name === "Dark") {
      localStorage.theme = "dark";
    } else {
      delete localStorage.theme;
    }
    setTheme();
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <Listbox.Button className={"p-2"}>
        {() => {
          if (localStorage.theme === "light") {
            return <Sun />;
          } else if (localStorage.theme === "dark") {
            return <Moon />;
          } else {
            return <Desktop />;
          }
        }}
      </Listbox.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options
          className={
            "bg-calcium absolute md:right-[-28px] right-0 dark:bg-zinc-800/50 p-2 rounded-md divide-y-2 divide-zinc-400/50 dark:divide-zinc-900 dark:text-white"
          }
        >
          {options.map((option) => (
            <Listbox.Option
              className={
                "flex ui-active:bg-neutral-400 ui-active:dark:bg-zinc-800 ui-selected:text-blue-500 rounded space-x-4 p-1"
              }
              key={option.id}
              value={option}
              disabled={option.unavailable}
            >
              <span>{option.icon}</span>
              <span>{option.name}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}

export default ThemeDropdown;
