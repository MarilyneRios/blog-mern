# React + Vite

## 1/npm create vite@latest

## 2/Project name: › frontend

## 3/Select a framework:
    ❯   React

## 4/ Select a variant:
  ❯    JavaScript + SWC

SWC est un transcompilateur JavaScript gratuit et open-source, similaire à Babel.
Vite utilise SWC pour exécuter la pipeline de transformation Babel beaucoup plus rapidement, ce qui est particulièrement utile pour les grands projets React.

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

## 10/
