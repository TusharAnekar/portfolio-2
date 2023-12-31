import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PeerlistLogo from "../images/peerlist.jpeg";
import WellFoundBlackImg from "../images/wellfound-lockup-black.png";
import WellFoundWhiteImg from "../images/wellfound-lockup-white.png";

import { NavLink } from "react-router-dom";
import { useThemeContext } from "../contexts/theme-context";

const Contact = () => {
  const { theme } = useThemeContext();

  return (
    <div className="mx-auto max-w-screen-lg">
      <section id="contact" className="border-content p-8 py-20 text-center">
        <h2 className="text-center text-2xl font-semibold">Get in touch...</h2>
        <p className="mt-4 text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className="my-8 flex flex-col items-center gap-4">
          <div
            className="flex h-6 w-6 animate-bounce cursor-pointer items-center justify-center gap-4"
            onClick={() => (window.location = "mailto:anekar.tushar@gmail.com")}
          >
            <EmailIcon />
            <p className="break-words rounded-2xl text-xl font-semibold md:text-3xl">
              anekar.tushar@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <PhoneIcon />
            <p className="rounded-2xl text-xl font-semibold md:text-3xl">
              +91 8669163309
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p>You may also find me on these platforms!</p>
          <div className="flex justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
};

export { Contact };
