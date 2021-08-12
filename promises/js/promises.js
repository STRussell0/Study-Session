const base_url = 'https://pokeapi.co/api/v2/'

const endpoint = 'pokemon/ditto'

const pokemonFetch = async () => {
    setTimeout(() =>
    {const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await response.json();
    console.log(pokemon);}, 5000);

    // await fetch(base_url + endpoint)
    // .then(response => response.json())
    // .then(data => console.log(data.name));

}

pokemonFetch();

