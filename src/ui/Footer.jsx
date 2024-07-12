import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 z-10">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold flex items-start">
          <Logo />
          <span className="text-xs ml-1 opacity-50">tm</span>
        </h1>
        <p className="mt-4 text-xs opacity-70">
          © 2024 Quizt. All rights reserved.
        </p>
        <p className="mt-2 text-xs opacity-70">
          Contribute to this project on{" "}
          <a
            href="https://github.com/abdel-rahmanSalem/quizt"
            className="text-blue-400 hover:underline transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
