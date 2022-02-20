

function search () {
    let value = document.getElementById('search').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById('image').src = data.sprites.front_default
		console.log(data);
		printData(data);
		document.getElementsByTagName("input")[0].value = "";
      })
  }





let containerImg = document.getElementById("containerImg");
let containerData = document.getElementById("containerData");



function printData(data){
	containerData.innerHTML = 
	` 
	<p>${data.name}</p>
	<ul>
		<li>💫 type: ${data.stats[4].base_stat }</li>
		<li>💫 abilities: ${data.abilities.map(ability => ability.ability.name).join(', ')}</li>
		<li>💫 attack: ${data.stats[1].base_stat }  (special   ${data.stats[4].base_stat })</li>
		<li>💫 defense: ${data.stats[2].base_stat }   (special  ${data.stats[4].base_stat } )</li>
	</ul>
	
	`
}





		 