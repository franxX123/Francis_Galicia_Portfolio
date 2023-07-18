import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Project1 from "../assets/project-1.jpeg";
import Project2 from "../assets/project-2.jpeg";
import Project3 from "../assets/project-3.jpeg";
import Project4 from "../assets/project-4.jpeg";
// import Project5 from "../assets/project-5.jpeg";
// import Project6 from "../assets/project-6.jpeg";
// import Project7 from "../assets/project-7.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Project = ({ title, project }) => {
  const overlayStyles = `group absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div
          className="mt-5 flex"
          style={{
            width: "100%",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            className="font-md border border-red bg-red rounded-full"
            style={{
              color: "#e1e1e1",
              padding: "4px 12px 4px 12px",
            }}
          >
            Demo
          </button>
          <button
            className="font-md border text-slate-100 border-red bg-red rounded-full"
            style={{
              color: "#e1e1e1",
              padding: "4px 12px 4px 12px",
            }}
          >
            Code
          </button>
        </div>
      </div>
      <img alt="project-thumbnail" src={project} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          cumque veritatis perferendis sapiente sunt dicta veniam.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* PROJECT ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Forkify" project={Project1} />
          <Project title="Project 2" project={Project2} />

          {/* PROJECT ROW 2 */}
          <Project title="Project 3" project={Project3} />
          <Project title="Project 4" project={Project4} />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
          {/* PROJECT ROW 3
          <Project title="Project 6" project={Project6} />
          <Project title="Project 7" project={Project7} /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
