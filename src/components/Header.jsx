import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "../contexts/theme-context";
import { DRIVE_URLS } from "../constants/urls";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { theme, setTheme } = useThemeContext();
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="mx-auto max-w-screen-lg">
      <header className="flex justify-between p-4">
        <HashLink
          to={"#"}
          className="text-xl font-semibold md:text-2xl lg:text-3xl"
          smooth
        >
          &lt;TA /&gt;
        </HashLink>

        <div className="flex items-center justify-center">
          <div className="md:hidden">
            {isOpenMenu ? (
              <CloseIcon
                className="block h-6 w-6 max-md:ml-auto"
                aria-hidden="true"
                onClick={handleMenu}
              />
            ) : (
              <MenuIcon
                className="block h-6 w-6 max-md:ml-auto"
                aria-hidden="true"
                onClick={handleMenu}
              />
            )}
          </div>
          <nav
            className={`flex gap-2 bg-orange-500 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:mt-12 max-md:flex-col max-md:p-4 md:gap-6 ${
              !isOpenMenu && "max-md:hidden"
            }`}
          >
            <HashLink smooth to={"/#skills"} onClick={handleMenu}>
              Skills
            </HashLink>

            <HashLink smooth to={"/#projects"} onClick={handleMenu}>
              Projects
            </HashLink>

            <HashLink smooth to={"/#work-experience"} onClick={handleMenu}>
              Work Experience
            </HashLink>

            <NavLink
              to={"https://tushar-anekar.hashnode.dev/"}
              target="_blank"
              rel="noopener norefferrer"
              onClick={handleMenu}
            >
              Blogs
            </NavLink>

            <HashLink smooth to={"/#contact"} onClick={handleMenu}>
              Contact
            </HashLink>

            <NavLink
              to={
                DRIVE_URLS.cvPDF
              }
              target="_blank"
              rel="noopener norefferrer"
              onClick={handleMenu}
            >
              Resume
            </NavLink>

            <button onClick={handleTheme} className="max-md:self-start">
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export { Header };
