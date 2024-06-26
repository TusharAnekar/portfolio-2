import HeroImg from "../images/Hero.jpg";
import PeerlistLogo from "../images/peerlist.jpeg";
import WellFoundBlackImg from "../images/wellfound-lockup-black.png";
import WellFoundWhiteImg from "../images/wellfound-lockup-white.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../contexts/theme-context";

const Hero = () => {
  const { theme } = useThemeContext();
  return (
    <div className="mx-auto max-w-screen-lg">
      <section
        className="flex flex-col items-center gap-4 p-8 md:flex-row md:justify-center"
        id="#"
      >
        <img
          src={HeroImg}
          alt="Tushar Anekar"
          className="order-last aspect-auto w-full md:order-first md:w-96"
        />
        <div className="flex flex-col gap-4 md:self-center">
          <p className="text-4xl font-medium md:text-5xl">Hi, I am Tushar 🙏</p>
          <p>
            A web developer, learning and applying the latest technologies and
            best practices in web development, such as ReactJS, Redux.js, and
            Back-End Web Development. Aim to become a leader in the tech
            industry who can create innovative and impactful solutions for
            society.
          </p>
          <div className="flex gap-2">
            <LocationOnIcon />
            <p>Pune, Maharashtra, India</p>
          </div>

          <div className="flex gap-4">
            <NavLink
              to={"https://github.com/TusharAnekar"}
              target="_blank"
              rel="noopener norefferrer"
              className={"transition duration-500 hover:scale-125"}
            >
              <GitHubIcon />
            </NavLink>
            <NavLink
              to={"https://www.linkedin.com/in/tusharanekar/"}
              target="_blank"
              rel="noopener norefferrer"
              className={"transition duration-500 hover:scale-125"}
            >
              <LinkedInIcon />
            </NavLink>
            <NavLink
              to={"https://twitter.com/TusharAnekar"}
              target="_blank"
              rel="noopener norefferrer"
              className={"transition duration-500 hover:scale-125"}
            >
              <TwitterIcon />
            </NavLink>

            <NavLink
              to={"https://peerlist.io/tusharanekar"}
              target="_blank"
              rel="noopener norefferrer"
              className={"transition duration-500 hover:scale-125"}
            >
              <img
                src={PeerlistLogo}
                alt="Peerlist"
                className="h-6 w-6 rounded-full"
              />
            </NavLink>

            <NavLink
              to={"https://wellfound.com/u/tushar-anekar"}
              target="_blank"
              rel="noopener norefferrer"
              className={"transition duration-500 hover:scale-125"}
            >
              <img
                src={theme === "dark" ? WellFoundWhiteImg : WellFoundBlackImg}
                alt="Peerlist"
                className="h-8 w-20"
              />
            </NavLink>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="relative flex h-3 w-3 ">
              <span className="absolute  inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <p>Open to work.</p>
            <HashLink
              smooth
              to={"/#contact"}
              className="animate-bounce rounded-full bg-orange-500 px-4 py-2"
            >
              Hire Me
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Hero };
