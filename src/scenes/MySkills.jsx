import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import figma from "../assets/figma.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import golang from "../assets/golang.png";
import graphql from "../assets/graphql.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import aws from "../assets/aws.png";
import html from "../assets/html.png";
import mongo from "../assets/mongo.png";
import java from "../assets/java.png";

const MySkills = () => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  const skillImages = [
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: tailwind, name: "Tailwind" },
    { img: javascript, name: "Javascript" },
    { img: typescript, name: "Typescript" },
    { img: mui, name: "Material UI" },
    { img: graphql, name: "Graphql" },
    { img: git, name: "Git" },
    { img: figma, name: "Figma" },
    { img: golang, name: "Golang" },
    { img: python, name: "Python" },
    { img: node, name: "Node" },
    { img: aws, name: "AWS" },
    { img: html, name: "HTML" },
    { img: mongo, name: "Mongo" },
    { img: java, name: "Java" },
  ];

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and image section */}
      <div className="flex justify-center gap-16 mt-32 text-[#f7d4e7]">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-center">
            MY <span className="text-red">SKILLS</span> &{" "}
            <span className="text-yellow">EXPERIENCES</span>
          </p>

          <div className="flex justify-center">
            <LineGradient width="w-2/4" />
          </div>
        </motion.div>
      </div>

      {/* SKILLS AND EXPERIENCE */}
      <div className="md:flex md:justify-center mt-24 gap-[156px]">
        {/* TECH STACK */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-8 gap-y-10">
          {skillImages.map((el, idx) => {
            // console.log(el.bgColor);
            return (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <div
                  className={`group w-[92px] h-[92px] flex flex-col justify-center items-center rounded-full bg-[#fef1cd]`}
                >
                  <img
                    className="group-hover:scale-110 transition duration-200 w-[64px]"
                    src={el.img}
                    alt="tailwind"
                  />
                </div>
                <p className="text-center mt-2">{el.name}</p>
              </div>
            );
          })}
        </div>

        {/* EXPERIENCE Timeline */}
        <div className="relative flex flex-col gap-y-[72px] sm:mt-0 mt-[72px] text-slate-200 -z-20">
          <div
            className={
              "h-0.5 w-[360px] bg-gradient-rainblue absolute rotate-90 top-[173px] -left-[163px] -z-10"
            }
          />

          <div className="flex flex-grow-0 gap-[44px]">
            <div className="flex justify-center text-blue font-semibold bg-[#010026] h-[24px]">
              2018
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-bold">
                Started Computer Science B.A
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                York University, Lassonde School of Engineering
              </p>
            </div>
          </div>

          <div className="flex flex-grow-0 gap-[44px]">
            <div className="flex justify-center text-blue font-semibold bg-[#010026] h-[24px]">
              2021
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-bold">
                Software Engineer Internship
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                Customer Discovery Inc.
              </p>
            </div>
          </div>

          <div className="flex gap-[44px]">
            <div className="flex flex-none justify-center text-yellow font-semibold bg-[#010026] h-[24px]">
              2022
            </div>

            <div className="flex flex-col">
              <h2 className="text-md font-bold">
                Graduated Computer Science B.A
              </h2>
              <p className="text-sm text-slate-300 mt-1">
                York University, Lassonde School of Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
