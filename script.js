var btn = document.getElementById('nome');
function pegarText(){
 
}






fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
.then(response=> response.json())
.then(allpokemon => {
    var pokemons = [];

    allpokemon.results.map((val)=>{
        
        fetch(val.url)
        .then(response => response.json())
        .then(pokemonSingle =>{
            pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});
            if(pokemons.length==10){
                pokemons.map((val)=>{
                    btn.addEventListener('click',()=>{
                        console.log(val.nome)
                    })
                })
            };
        })


    })
});
