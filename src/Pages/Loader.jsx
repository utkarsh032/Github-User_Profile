
const Loader = () => {
  return (
    <div className="card card-side flex justify-center items-center h-screen p-6">

      <div className=" p-10  rounded-md shadow-neon bg-base-200">

        <div className=" grid md:grid-cols-2 gap-6  w-full">

          <div className="skeleton shadow-neon mx-auto w-32 h-32 rounded-full"></div>

          <div className="flex flex-col gap-4 w-52 ">
            <div className="skeleton h-32 w-full shadow-neon"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Loader
