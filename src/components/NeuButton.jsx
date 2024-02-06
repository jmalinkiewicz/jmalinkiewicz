const NeuButton = ({ text }) => {
  return (
    <button className="font-medium bg-indigo-500 px-6 py-2 w-fit hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/50 transition-all">
      {text}
    </button>
  );
};

export default NeuButton;
