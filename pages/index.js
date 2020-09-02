export default () => (
  <section class="container mx-auto py-24 px-4">
    <div class="grid grid-cols-1 lg:grid-cols-11 items-center gap-0 lg:gap-24 w-full xl:w-11/12 mx-auto">
      <div class="col-auto md:col-span-7 text-center lg:text-left">
        <h1 class="text-4xl md:text-6xl leading-tight md:leading-none font-bold md:font-extrabold tracking-none md:tracking-tight text-gray-900 mb-4">
          Ready to start your journey?
        </h1>
        <p class="text-lg md:text-2xl font-light text-gray-600 mb-10 md:mb-4">
          Let's get this bread friends. Stop wasting time letting other people
          run this sh*t. It's time to take a stand, use a bunch of automation
          tools and start making that moolah... all while viewing your data in
          one sexy-ass dashboard.
        </p>
      </div>
      <div class="col-auto md:col-span-4">
        <form class="card border-0 shadow-xl rounded-lg mb-6">
          <div class="card-header justify-center border-0 pb-0 font-mono text-gray-700">
            <p class="pt-2">Start analysing now</p>
          </div>
          <div class="card-body px-6 py-4 border-b border-gray-200 space-y-4">
            <label class="tag-label">
              <span class="sr-only">First Name</span>
              <input
                class="tag-input mt-0"
                type="text"
                placeholder="First Name"
                required="true"
              />
            </label>
            <label class="tag-label">
              <span class="sr-only">Email Address</span>
              <input
                class="tag-input mt-0"
                type="email"
                placeholder="Email Address"
                required="true"
              />
            </label>
            <label class="tag-label">
              <span class="sr-only">Password</span>
              <input
                class="tag-input mt-0"
                type="password"
                placeholder="Password"
                required="true"
              />
            </label>
            <button class="btn btn-primary w-full py-2" type="submit">
              Sign up for free
            </button>
          </div>
          <div class="card-body px-6 py-4">
            <button class="btn btn-icon btn-google py-2 w-full flex justify-center">
              <svg
                class="mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="transparent"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
              </svg>
              Continue with Google
            </button>
          </div>
        </form>
        <p class="text-xs text-center text-gray-600">
          By signing up you agree to our{' '}
          <a href="#" class="text-primary">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  </section>
);
