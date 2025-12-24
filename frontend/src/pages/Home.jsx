const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl px-6 py-14 md:py-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Your Career Growth Platform
          </h1>

          {/* SUBTITLE */}
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Discover jobs, unlock paid benefits, and grow with a strong professional community.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                className="h-10 mb-2"
              />
              <h2 className="text-2xl font-bold text-red-400">500+</h2>
              <p className="text-gray-400 text-sm">Hiring Companies</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt=""
                className="h-10 mb-2"
              />
              <h2 className="text-2xl font-bold text-red-400">10k+</h2>
              <p className="text-gray-400 text-sm">Community Members</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt=""
                className="h-10 mb-2"
              />
              <h2 className="text-2xl font-bold text-red-400">Paid</h2>
              <p className="text-gray-400 text-sm">Career Benefits</p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-md">
              Explore Jobs
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-semibold transition">
              Join Community
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
