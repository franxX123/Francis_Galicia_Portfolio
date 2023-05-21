import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  const pages = ["home", "skills", "projects", "testimonials", "contact"];

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      {pages.map((page, id) => {
        return (
          <AnchorLink
            className={`${
              selectedPage === page ? selectedStyles : "bg-dark-grey"
            } w-3 h-3 rounded-full`}
            href={`#${page}`}
            onClick={() => setSelectedPage(page)}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default DotGroup;
