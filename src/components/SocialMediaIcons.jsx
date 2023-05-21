import LinkedIn from "../assets/linkedin.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={LinkedIn} />
      </a>

      <a
        href="https://www.facebook.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={Facebook} />
      </a>

      <a
        href="https://www.twitter.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={Twitter} />
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        className="hover:opacity-50 transition duration-500"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
