const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center">
            <span className="text-blue-600">Q</span>uizt
            <span className="text-sm ml-1 opacity-50">tm</span>
          </h1>
          {/* <div className="flex space-x-4">
            <a
              href="https://github.com/abdel-rahmanSalem"
              className="text-gray-300 text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div> */}
        </div>
        <p className="mt-4 text-sm opacity-70">
          © 2024 Quizt. All rights reserved.
        </p>
        <p className="mt-2 text-sm opacity-70">
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
