function AnimatedHamburger({ isOpen, setIsOpen }) {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="md:hidden relative group" onClick={toggleOpen}>
      <div className="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-800 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div
          className={`transform transition-all duration-150 overflow-hidden ${
            isOpen ? "translate-y-3" : "-translate-y-5"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce text-white stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="flex flex-col justify-center items-center gap-1 w-[15px] h-[15px] transform transition-all duration-300 origin-center">
          <div
            className={`bg-gray-300  h-[2px] w-4 transform transition-all duration-300 origin-left ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
          <div
            className={`bg-gray-300  h-[2px] w-4 rounded transform transition-all duration-300 delay-75 ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
          <div
            className={`bg-gray-300 h-[2px] w-4 transform transition-all duration-300 origin-left delay-100 ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
}

export default AnimatedHamburger;
