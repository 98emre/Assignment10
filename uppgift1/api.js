


const fetchCharacterBio = () => {
    const characterInput = document.getElementById("characterName").value.trim();
    const characterBio = document.getElementById("characterBio");
    const apiURL = `https://www.swapi.tech/api/people/?name=${characterInput}`;

    if(characterInput.trim() == ""){
        characterBio.value = "Please write something";
        return;
    }


    fetch(apiURL)
        .then((response) => {
            if(!response.ok){
                throw new Error("Response error")
            }

            return response.json();
        })

        .then((data) => {
            if(data && data.result.length > 0){
                const characterAPI = data.result[0].properties;
                const character = `Name: ${characterAPI.name}\nHeight: ${characterAPI.height} cm\nMass: ${characterAPI.mass}\nHair Color: ${characterAPI.hair_color}\nGender: ${characterAPI.gender}`;
                characterBio.value = character;
            } else{
                characterBio.value = "Characer Not Found";
            }


        })
        .catch(error => console.log("API fetch error: ", error))
}

document.getElementById("submitButton").addEventListener('click',fetchCharacterBio);
