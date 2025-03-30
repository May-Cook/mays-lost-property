import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-pink-400">
      <div className="h-20"></div>
      <div className="bg-rose-200 border-stone-700 flex max-w-xl border-solid border-2 rounded-xl px-3 py-4 mx-auto">
        <p className="text-stone-950 text-2xl text-center">
          <div className="font-semibold text-3xl">Hi, I'm May. </div>
          <div>
            If you are seeing this you have probably found an item of mine and
            scanned the qr code taking you to this page. <br></br>Please could
            you contact me at{" "}
            <a
              href="mailto:may@jdew.co.uk"
              className="font-bold hover:font-extrabold hover:text-fuchsia-500 transition-all"
            >
              may@jdew.co.uk
            </a>{" "}
            so I can arrange for you to send it to me.
            <br></br>Thank you!
          </div>
        </p>
      </div>
    </div>
  );
}

export default App;
