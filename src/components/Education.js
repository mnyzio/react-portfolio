export default function Education() {
  return (
    <>
      <h5 className="bg-gray-900 text-gray-50 inline-block p-2 font-bold rounded-md shadow-lg my-6 text-xl">
        Education
      </h5>
      <div className="px-4 pb-4 pt-2 bg-gray-100 flex flex-col">
        <article className="">
          <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
            Rutgers
          </h3>
          <div className="px-4">
            <p className="font-extrabold">Full-Stock Web Development Program</p>
            <p>December 2022 - June 2023</p>
            <p>MERN Web Development</p>
          </div>
        </article>
        <article className="">
          <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
            Middlesex County College
          </h3>
          <div className="px-4">
            <p className="font-extrabold">Associate in Applied Science</p>
            <p>Computer Science</p>
            <p>Network Administration and Support</p>
          </div>
        </article>
        <article className="">
          <h3 className="bg-orange text-white my-4 inline-block p-2 rounded-md shadow-lg font-bold">
            edX - CS50
          </h3>
          <div className="px-4">
            <p className="font-extrabold">
              CS50 Certificate from Harvard University
            </p>
            <p>December 2022</p>
          </div>
        </article>
      </div>
    </>
  );
}
