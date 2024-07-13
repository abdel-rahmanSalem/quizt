function AnimatedHamburger({ isOpen, setIsOpen }) {
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className="group relative md:hidden" onClick={toggleOpen}>
      <div className="relative flex h-[40px] w-[40px] transform flex-col items-center justify-center overflow-hidden rounded-full bg-slate-800 shadow-md ring-0 ring-gray-300 ring-opacity-30 transition-all duration-200 hover:ring-8 group-focus:ring-4">
        <div
          className={`transform overflow-hidden transition-all duration-150 ${
            isOpen ? "translate-y-3" : "-translate-y-5"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce stroke-2 text-white"
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

        <div className="flex h-[15px] w-[15px] origin-center transform flex-col items-center justify-center gap-1 transition-all duration-300">
          <div
            className={`h-[2px] w-4 origin-left transform bg-gray-300 transition-all duration-300 ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
          <div
            className={`h-[2px] w-4 transform rounded bg-gray-300 transition-all delay-75 duration-300 ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
          <div
            className={`h-[2px] w-4 origin-left transform bg-gray-300 transition-all delay-100 duration-300 ${
              isOpen ? "translate-y-9" : "-translate-y-2.5"
            }`}
          ></div>
        </div>
      </div>
    </button>
  );
}

export default AnimatedHamburger;
