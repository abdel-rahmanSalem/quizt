import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="z-10 bg-black py-6 text-white">
      <div className="container mx-auto px-4">
        <h1 className="flex items-start text-2xl font-bold">
          <Logo />
          <span className="ml-1 text-xs opacity-50">tm</span>
        </h1>
        <p className="mt-4 text-xs opacity-70">
          © 2024 Quizt. All rights reserved.
        </p>
        <p className="mt-2 text-xs opacity-70">
          Contribute to this project on{" "}
          <a
            href="https://github.com/abdel-rahmanSalem/quizt"
            className="text-blue-400 transition-colors duration-300 hover:underline"
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
