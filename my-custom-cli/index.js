#!/usr/bin/env node

// const yargs = require("yargs");
// const { argv } = yargs(process.argv);

// import inquirer package
const inquirer = require("inquirer");

const printFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );

  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

// initialize prompt module
const prompt = inquirer.createPromptModule();

// prompt carries an array of objects, each being a prompt
// prompt returns a promise
prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its first 5 moves",
  },
]).then((answers) => {
  const pokemon = answers.pokemon; // corresponds to name in each prompt
  printFiveMoves(pokemon);
});
