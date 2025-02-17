import food from "../assets/food-app.jpg";
import dashboard from "../assets/Dashboard-Image.webp";
import ecommerce from "../assets/ecommerce-app.png";
import travel from "../assets/travel-app.jpg";
import AnimationFeedIn from "../UI/AnimationFeedIn";
import { useState } from "react";
function Projects() {
  const [project] = useState([
    { image: food, name: "Food App" },
    { image: dashboard, name: "Admin Dashboard" },
    { image: ecommerce, name: "E-commerce App" },
    { image: travel, name: "Travel App" },
  ]);

  console.log(project);
  return (
    <section
      id="projects"
      className="min-h-screen  flex items-center font-mono justify-center py-20"
    >
      <AnimationFeedIn>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-bold mb-8 bg-gradient-to-r from-teal-500  to-indigo-600 bg-clip-text text-transparent text-center ">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {project.map((data, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center  border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl  mb-4">{data.name}</h3>
                <p className="text-gray-300 mb-4">
                  Scalable Dashboard App with CRUD operations manages all the
                  bookings, users, guests and services.
                </p>
                <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {["React", "Supabase", "Vercel"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 pt-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white  h-7"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex flex-col  text-center my-5 py-3  justify-center gap-3   border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)] cursor-pointer rounded-xl">
                    <p className="text-gray-200 ">View Project</p>
                    <a
                      href="#"
                      className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
                    >
                      {/* <ArrowRightIcon className="w-6 h-5  ml-3 inline " /> */}

                      <img
                        className="h-[200px] w-[300px] overflow-hidden rounded"
                        src={data.image}
                        alt={`${data.name} Image`}
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <Project /> */}
            {/* <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 ">
        <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
        <p className="text-gray-300 mb-4">
          Scalable Dashboard App with CRUD operations manages all the
          bookings, users, guests and services.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Supabase", "Vercel"].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
            >
              {tech}
            </span>
          ))}
          <div className="flex justify-between items-center">
            <a
              href="#"
              className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
            >
              View Project
              <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
              <Img item={freshBurger} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900 ">
        <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
        <p className="text-gray-300 mb-4">
          Scalable Dashboard App with CRUD operations manages all the
          bookings, users, guests and services.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Supabase", "Vercel"].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
            >
              {tech}
            </span>
          ))}
          <div className="flex justify-between items-center">
            <a
              href="#"
              className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
            >
              View Project
              <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
              <Img item={viberr} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900">
        <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
        <p className="text-gray-300 mb-4">
          Scalable Dashboard App with CRUD operations manages all the
          bookings, users, guests and services.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Supabase", "Vercel"].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all hover:text-white "
            >
              {tech}
            </span>
          ))}
          <div className="flex justify-between items-center">
            <a
              href="#"
              className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
            >
              View Project
              <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
              <img
                className="max-w-fit"
                src={hipsster}
                alt="project-logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-xl border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.2)]  hover:-translate-y-1 transition-all hover:bg-cyan-900">
        <h3 className="font-semibold text-xl mb-3">Hotel Dashboard</h3>
        <p className="text-gray-300 mb-4">
          Scalable Dashboard App with CRUD operations manages all the
          bookings, users, guests and services.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {["React", "Supabase", "Vercel"].map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,13O,246,0.1)] transition-all  hover:text-white"
            >
              {tech}
            </span>
          ))}
          <div className="flex justify-between  items-center">
            <a
              href="#"
              className=" flex justify-between items-center font-bold  text-blue-400  transition-colors hover:text-white"
            >
              View Project
              <ArrowRightIcon className="w-6 h-5  ml-3 inline " />
              <img className="max-w-fit" src={fitlift} alt="project-logo" />
            </a>
          </div>
        </div>
      </div> */}
          </div>
        </div>
      </AnimationFeedIn>
    </section>
  );
}

export default Projects;
