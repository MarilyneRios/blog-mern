import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import Logo from "../assets/logoDevBlue.png";

export default function Header() {
  const path = useLocation().pathname; //pour active link

  return (
    <Navbar fluid className="bg-gray-500 border-b-2 ">
      <Navbar.Brand
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl"
      >
        <img
          src={Logo}
          className="mr-5 h-9 w-9 sm:h-9 sm:w-9 md:h-12 md:w-12 rounded"
          alt="My logo"
        />
        <span className=" p-3 bg-gradient-to-r from-cyan-700 via-cyan-500 to-cyan-700 rounded-lg text-white">
          Marilyne Blog
        </span>
      </Navbar.Brand>

      {/* Rechercher: champ de saisie ou btn */}
      <form>
        <TextInput
          type="text"
          placeholder="Rechercher..."
          rightIcon={AiOutlineSearch}
          className="p-3 rounded-lg border-none shadow-none focus:outline-none focus:ring focus:border-cyan-500 hidden lg:inline"
        />
      </form>
      <Button
        className="w-12 h-10 lg:hidden border border-white bg-gray-500"
        pill
      >
        <AiOutlineSearch className="text-white" size={20} />
      </Button>

      {/* Ajoutez les btns dark mode et connexion*/}

      <div className="flex gap-2 md:order-2 text-sm sm:text-xl ">
        <Button
          className="w-12 h-10 hidden lg:inline border border-white bg-gray-500"
          pill
        >
          <FaMoon />
        </Button>

        <Link to="/sign-in">
          <Button className="border-2 border-white text-white bg-gray-500 hover:bg-cyan-700">
            Connexion
          </Button>
        </Link>

        <Navbar.Toggle className="mx-3 p-2 border-2 border-white text-white bg-gray-500 hover:bg-cyan-700 rounded" />
      </div>

      {/* Les liens*/}
      <Navbar.Collapse className="self-center whitespace-nowrap mb-1">
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/" className="text-white text-md lg:text-xl">
            Accueil
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about" className="text-white text-md lg:text-xl">
            A propos
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects" className="text-white text-md lg:text-xl">
            Projets
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
