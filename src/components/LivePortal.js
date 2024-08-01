import React from "react";

export default function BankHomepage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://i.ibb.co/R0qm3Wg/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src="https://i.ibb.co/R0qm3Wg/background.jpg"
        className="h-10"
        alt="Language"
      />
      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Welcome</h2>
            <p className="text-gray-700">
              Investment Bank provides corporate, institutional and wealth
              management clients with expert advice, innovative solutions,
              execution and comprehensive access to international capital
              markets
            </p>
          </div>

          <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">News and Updates</h2>
            <ul className="divide-y divide-gray-200">
              <li className="py-2">
                <h3 className="text-lg font-semibold">
                  Is Gen AI a game changer?
                </h3>
                <p className="text-gray-700">
                  The technology could result in a massive workforce
                  productivity boom over the next one to three years, which
                  could affect the shape of the economic cycle.
                </p>
              </li>
              <li className="py-2">
                <h3 className="text-lg font-semibold"></h3>
                <p className="text-gray-700"></p>
              </li>
            </ul>
          </div>
        </section>
        <div className="grid grid-col-1 sm:grid-cols-2 items-center justify-center bg-white py-12 px-6">
          <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
            <img
              src="https://media.istockphoto.com/id/1050046190/vector/money-transfer-global-currency-stock-exchange-stock-vector-illustration.jpg"
              alt="Money Transfer Global Currency"
              className="w-full h-auto"
            />
          </div>
          <div className="">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Shareholders are at the{" "}
              <span className="text-orange-600">center</span> of everything we
              do
            </h1>
            <p className="text-lg lg:text-xl text-gray-700">
              Through our tailored solutions spanning investment and commercial
              banking, payments processing and asset management, we're
              relentlessly focused on serving our clients globally and driving
              sustainable impact for our communities.
            </p>
          </div>

          <div className="lg:w-1/2 px-6 mt-8 lg:mt-0">
            <img
              src="https://www.google.com/imgres?q=currency%20globe&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1050046190%2Fvector%2Fmoney-transfer-global-currency-stock-exchange-stock-vector-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DaBv6IflgtYF3-jvAynZpALKRfwLrh_atxJBS9j2v-OI%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcurrency-currency-symbol-world-map-globe&docid=2Z8F1qqz1xqg4M&tbnid=ZGSfmB6mHN_4hM&vet=12ahUKEwibwdPWruuGAxUh8zgGHcpMAW4QM3oECF0QAA..i&w=612&h=408&hcb=2&ved=2ahUKEwibwdPWruuGAxUh8zgGHcpMAW4QM3oECF0QAA"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="h-full p-4 lg:w-1/3">
            <div className="bg-gray-100 px-8 pt-16 pb-16 relative">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl  mb-3">
                e-banking verification
              </h1>
              <p className="mb-3"></p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="h-full p-4 lg:w-1/3">
            <div className="bg-gray-100 px-8 pt-16 pb-16 relative">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl  mb-3">
                How it automates tasks
              </h1>
              <p className="mb-3">provide reports on tasks being performed</p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="h-full p-4 lg:w-1/3">
            <div className="bg-gray-100 px-8 pt-16 pb-16 relative">
              <h2 className="text-xs mb-1">CATEGORY</h2>
              <h1 className="title-font sm:text-2xl text-xl mb-3">GEN AI </h1>
              <p className="mb-3">effective use in banking</p>
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-100 text-center py-4 mt-auto">
        <p>&copy; 2024 Bank Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
