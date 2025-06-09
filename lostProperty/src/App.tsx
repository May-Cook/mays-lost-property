import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-rose-400">
      <div className="h-20"></div>
      
      <div className="bg-purpink-m border-purpink-d flex max-w-xl border-solid border-6 rounded-xl shadow-lg dark:shadow-pink-950/40 px-3 py-4 mx-auto my-5">
        <p className="text-stone-950 text-2xl text-center">
          <div className="font-semibold text-3xl">Hi, I'm May. </div>
          <div>
            If you are seeing this you have probably found an item of mine and
            scanned the qr code taking you to this page. <br></br>Please could
            you contact me at{" "}
            <a
              href="mailto:may@jdew.co.uk"
              className="bg-purpink-l/70 p-1 rounded-lg font-bold hover:font-extrabold hover:bg-purpink-l hover:rounded-lg hover:text-purpink-d transition-all"
            >
              may@jdew.co.uk
            </a>{" "}
            so I can arrange for you to send it to me.
            <br></br>Thank you!
          </div>
        </p>
      </div>
      
      <div className="bg-purpink-m border-purpink-d max-w-md border-solid border-6 shadow-lg dark:shadow-pink-950/40 rounded-xl px-3 py-4 mx-auto">
        <p className="text-stone-950 text-lg p-1 font-semibold">
          I don't want to give out too much of my info as I am worried I'm going to be contacted by spam/scammers, but here are some of my socials:
        </p>
            <ul className="bg-purpink-l/80 text-xl rounded-xl py-3 mt-1 max-w-25 p-2 hover:max-w-35 hover:bg-purpink-l transition-all">
              <li>
                <a 
                  href="https://github.com/May-Cook" 
                  className="font-bold hover:font-extrabold hover:text-purpink-d transition-all"
                >
                  Github
                </a>
              </li>
              <li className="mt-1">
                <a 
                  href="https://www.linkedin.com/in/may-cook-1963951b9/" 
                  className="font-bold hover:font-extrabold hover:text-purpink-d transition-all"
                >
                  Linkedin
                </a>
              </li>
          </ul>
      </div>

      <div className="max-w-3xs py-5 mx-auto">
        <img className="shadow-lg dark:shadow-pink-950/50 rounded-4xl" src={"src/assets/qrIcon.png"} alt="QR code sticker" />
      </div>
    </div>
  );
}

export default App;
