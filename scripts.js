pegaPokemon = (quant) =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quant)
    .then(res => res.json())
    .then(allpokemon => {
        
        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(res => res.json())
            .then(pokemonSingle => {
                
                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";
                pokemons.push({nome:val.name,imagem: pokemonSingle.sprites.front_default});

                if(pokemons.length == quant){
                    //final da requisição
                    //console.log(pokemons);
                
                    pokemons.map((val)=>{
                        pokemonBoxes.innerHTML+=`<div class="pokemon-box">
                        <img src="`+(val.imagem)+`" alt="`+(val.nome)+`">
                        <p>`+(val.nome)+`</p>
                    </div><!--pokemon-box -->`
                    })
                }
            })
        })
    })
}
var quantidade = document.getElementById("quant");
quantidade.addEventListener("keyup",()=>{
    pegaPokemon(quantidade.value)
})
pegaPokemon(30);