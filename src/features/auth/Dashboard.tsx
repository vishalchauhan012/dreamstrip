



export default function Dashboard() 
{
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="max-w-sm p-4 m-4 bg-white border border-solid  border-gray-300 shadow-xl rounded-lg">
          <h1 className="text-2xl font-bold flex justify-center">Dashboard Page</h1>
          <div className="text-gray-500 font-sm mt-2 p-4 mb-4">
            <label className=" text-gray-500 font-sm   -translate-x-0.5 transform">FirstName</label>
            <input
            type="text"
            className="w-full mb-2 mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            />
             <label className="text-gray-500 font-sm  -translate-x-0.5 transform">LastName</label>
            <input
            type="text"
            className="w-full mb-2 mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            />
             <label className="text-gray-500 font-sm  -translate-x-0.5 transform">Email</label>
            <input
            type="text"
            className="w-full mb-2 mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            />
             <label className="text-gray-500 font-sm  -translate-x-0.5 transform">Phone Number</label>
            <input
            type="text"
            className="w-full mb-2 mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            />
          </div>
          <div><button type="button" className="w-full  bg-blue-600 text-white py-2.5 mb-2 rounded-md font-medium hover:bg-blue-700 transition">Submit</button></div>
          
      </div>
    </div>
  );
}
