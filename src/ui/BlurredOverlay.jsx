function BlurredOverlay({ setIsOpen }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 z-20 h-screen w-full bg-black bg-opacity-10 backdrop-blur-sm md:hidden"
    ></div>
  );
}

export default BlurredOverlay;
