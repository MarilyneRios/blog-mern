# React + Vite

## 1/npm create vite@latest

## 2/Project name: › frontend

## 3/Select a framework:
    ❯   React

## 4/ Select a variant:
  ❯    JavaScript + SWC

SWC est un transcompilateur JavaScript gratuit et open-source, similaire à Babel.
Vite utilise SWC pour exécuter la pipeline de transformation Babel beaucoup plus rapidement, ce qui est particulièrement utile pour les grands projets React.

Dans le dossier frontend: **npm run dev** pour lancer le front

## 5/ tailwind css vite react

 ### 5.1/ npm install -D tailwindcss postcss autoprefixer

 ### 5.2/ npx tailwindcss init -p (créer un fichier de configuration pour Tailwind CSS.)

 ### 5.3/ dans tailwind.config.js :

 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

## 6/ dans inex.css :

tout effacer puis coller :
@tailwind base;
@tailwind components;
@tailwind utilities;

## 7/Supprimer App.css

## 8/ Nettoyer le public et assets

## 9/ index.html :

<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marilyne blog</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

## 10/ créer un dossier screens dans src

## 11/ créer les fichiers : 
AboutScrenen, DashboardScreen, HomeScreen, ProjectScreen, SignIn, SignUp en jsx

## 12/ npm install react-router-dom

### dans App.jsx :

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ProjectsScreen from "./screens/ProjectsScreen";
import DashboardScreen from "./screens/DashboardScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

## 13/ créer un dossier components et le fichier Header.jsx

## 14/ Ajouter le Hearder ds App.jsx

faites bien attention de mettre votre Header entre les balises BrowserRoutes, 
sinon il ne sera pas pris en compte par react-dom-router

  <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
      </Routes>
  </BrowserRouter>

## 15/ https://flowbite-react.com/

Une bibliothèque de composants UI open source construite sur le dessus de Tailwind CSS avec des composants React et basée sur le système de conception Flowbite.


  ### Run the following command to install flowbite-react:

npm i flowbite-react

  ### Add the Flowbite React content path and plugin to tailwind.config.js:

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};

## 16/ Hearder
   en 4 parties: 
   - 1/ Navbar.Brand :  le logo et le nom du blog
   - 2/ Navbar.Collapse : plusieurs liens de navigation
   - 3/ Champ de recherche :  un champ de saisie pour la recherche + une icône de recherche
   - 4/ Boutons : de connexion et Toggle qui est visible seulement sur les petits écrans

   useLocation pour les lien active => const path = useLocation().pathname; //pour active link

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
