import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { GrSystem } from "react-icons/gr";
import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const theme = localStorage.theme ? localStorage.theme : "system";

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-asphalt dark:bg-calcium dark:text-black dark:hover:text-white dark:hover:bg-indigo-500 hover:bg-indigo-500 transition-colors ${
          open
            ? "bg-indigo-500 dark:bg-indigo-500 text-white dark:text-white"
            : ""
        }`}
      >
        <span className="font-medium text-sm">{theme} mode</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 z-20 p-2 rounded-lg bg-white dark:bg-zinc-700 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <Option setOpen={setOpen} Icon={GrSystem} text="system" />
        <Option setOpen={setOpen} Icon={FaRegSun} text="light" />
        <Option setOpen={setOpen} Icon={FaRegMoon} text="dark" />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        switch (text) {
          case "system":
            localStorage.removeItem("theme");
            setTheme();
            break;
          case "light":
            localStorage.theme = "light";
            setTheme();
            break;
          case "dark":
            localStorage.theme = "dark";
            setTheme();
            break;
          default:
            break;
        }
        setOpen(false);
      }}
      className={`flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 dark:text-indigo-50 dark:hover:text-indigo-500 dark:hover:bg-zinc-800 transition-colors cursor-pointer ${
        text.toLowerCase() === localStorage.theme ||
        (!localStorage.theme && text === "system")
          ? "bg-indigo-100 text-indigo-500 dark:bg-zinc-800 dark:text-indigo-500"
          : ""
      }`}
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

function setTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
