const StatsBar = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="px-4 pt-4 pb-0">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-2 rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <p className="leading-relaxed">Total Followers</p>
                <div className="rounded-xl bg-green-200">
                  <span className="block py-2 px-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-green-500 w-8 h-8 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                560
              </h2>
              <p className="leading-relaxed text-sm">Up from last week</p>
            </div>
          </div>

          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-2 rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <p className="leading-relaxed">Best Post Time</p>
                <div className="rounded-xl bg-yellow-200">
                  <span className="block py-2 px-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-yellow-500 w-8 h-8 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                Late Arvo
              </h2>
              <p className="leading-relaxed">Up from last week</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-2 rounded-lg bg-white">
              <div className="flex items-center justify-between">
                <p className="leading-relaxed">Total Followers</p>
                <div className="rounded-xl bg-indigo-200">
                  <span className="block py-2 px-2">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="text-blue-500 w-8 h-8 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <h2 className="title-font font-medium text-2xl text-gray-900">
                2.3K
              </h2>
              <p className="leading-relaxed">Down from last week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
