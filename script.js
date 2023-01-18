function pegaPokemons(url){
     fetch(`https://pokeapi.co/api/v2/pokemon/`+url)
     .then(response=> response.json())
     .then(pokemonSingle =>{
             var pokemons = [];
         pokemons.push({nome:pokemonSingle.name, imagem:pokemonSingle.sprites.front_default, tipo:pokemonSingle.types.type});               
             var pokeBox = document.querySelector('.card__content');
             pokeBox.innerHTML = "";
             pokemons.map((val)=>{   
             pokeBox.innerHTML+= `
               <div class="card__content">
             <h1>${val.nome}</h1>
                 <img src="${val.imagem}" alt="" srcset="">
                 <p>eletric</p>
         </div>
             `
             })
     });
}
var nome = document.getElementById("xxt");
nome.addEventListener('keyup',()=>{
 pegaPokemons(nome.value);
})

// function Enviar() {

//     var nome = document.getElementById("xxt");

//     if (nome.value != "") {
//         pegaPokemons(nome.value);
//     }

// }
