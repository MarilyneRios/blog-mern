import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import Logo from '../assets/logoDevBlue.png';

export default function Header() {
  return (
    <Navbar fluid  className='bg-gray-600'>
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 sm:h-9 rounded w-9 h-9" alt="Flowbite React Logo" />
        <span className="px-2 py-1 bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800 rounded-lg text-white">
          Marilyne Blog
        </span>
      </Navbar.Brand>

      <Navbar.Collapse>
        <a href="#" className="text-white hover:text-blue-500">Accueil</a>
        <a href="#" className="text-white hover:text-blue-500">A propos</a>
        <a href="#" className="text-white hover:text-blue-500">Articles</a>
        <a href="#" className="text-white hover:text-blue-500">Projets</a>
      </Navbar.Collapse>

      {/* Ajoutez le champ de recherche ici */}
      <div className="flex items-center space-x-2 md:order-2">
        <input
          type="text"
          placeholder="Rechercher..."
          className="px-2 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <AiOutlineSearch className="text-white" size={30}/>
      </div>

      <div className="flex md:order-3 ">
        <Button>Connexion</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
