import React from "react";

const App = () => {
  return (
    <div className="min-h-screen  flex flex-col ">
      <header className="bg-[#333] text-white text-center p-8">
        <h1>Header</h1>
      </header>
      <div  className="flex flex-col sm:flex-row flex-1 ">
        <aside  className="w-[100%] sm:w-[200px] text-center flex flex-col  justify-center  items-center">
          <h2>left-side</h2>
          <p>Content in left side</p>
        </aside>
        <main className="flex-1 text-center bg-sky-50  flex flex-col  justify-center  items-center ">
          <h2>Main Containt</h2>
          <p>main content in the center</p>
        </main>
        <aside className="w-[100%] sm:w-[200px] text-center  flex flex-col  justify-center  items-center">
          <h2>Right-side</h2>
          <p>content in the right side</p>
        </aside>
      </div>
      <footer  className="bg-[#333] text-white text-center p-8">
        <h3>Footer</h3>
      </footer>
    </div>
  );
};

export default App;
