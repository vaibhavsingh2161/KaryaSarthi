import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">KaryaSarthi</h2>
            <p className="text-sm">Designed & Coded by Vaibhav Singh.</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/vaibhavsingh2161"
              className="hover:text-gray-400"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582 0-.29-.01-1.06-.015-2.08-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.332-1.753-1.332-1.753-1.088-.744.083-.729.083-.729 1.204.084 1.837 1.235 1.837 1.235 1.07 1.834 2.805 1.304 3.49.996.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.383 1.236-3.223-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.527 11.527 0 013.005-.404c1.02.005 2.046.137 3.005.404 2.292-1.552 3.3-1.23 3.3-1.23.652 1.653.24 2.874.118 3.176.768.84 1.236 1.913 1.236 3.223 0 4.61-2.807 5.623-5.479 5.921.43.372.824 1.103.824 2.222 0 1.606-.015 2.903-.015 3.293 0 .324.19.698.8.58C20.565 21.797 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-singh-8a35a5163/"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
