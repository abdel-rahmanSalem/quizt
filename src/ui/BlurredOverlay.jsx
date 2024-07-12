function BlurredOverlay({ setIsOpen }) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 w-full h-screen bg-black bg-opacity-10 backdrop-blur-sm z-20"
    ></div>
  );
}

export default BlurredOverlay;
