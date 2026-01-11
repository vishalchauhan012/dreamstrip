

export default function DashMain() 
{
  return (  
  
  <div className="grid md:grid-cols-[260px_1fr] grid-rows-[64px_1fr_64px] h-screen">

    <aside className="hidden md:block md:row-span-3  border border-gray-300 shadow-lg">
        <div className=" flex flex-col items-center justify-between h-full p-2">
      
        <ol className=" p-2 mt-4 space-y-6 text-gray-600 font-medium flex flex-col items-start justify-center ">
          <li className=" cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Contact</li>  
        </ol>

        <div>
            <h1 className="">My App</h1>
        </div>
        </div>

    </aside>

    <header className="shadow-md bg-white">

        <div className="flex items-center justify-between h-16 px-4">
         
        <figure>
           <img src="" alt="Trulli"  />
           <figcaption>my app</figcaption>
        </figure>

       <ol className=" p-1 space-x-6 text-gray-600 font-medium ">
           <li className="inline-block cursor-pointer">Home</li>
            <li className="inline-block cursor-pointer">About</li>
            <li className="inline-block cursor-pointer">Services</li>
            <li className="inline-block cursor-pointer">Contact</li>  

        </ol>
      </div>

    </header>

    <main>Main Content</main>
    <footer className=" bg-white shadow-lg border border-solid border-gray-300 flex justify-center items-center p-2">@2025 copyright</footer>

   </div>

       )}


