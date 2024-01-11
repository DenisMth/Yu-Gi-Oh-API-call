/*
const fetchFile = () => fetch("array.json");

fetchFile()
	.then((response) => response.json())
	.then((json) => {
            let para = document.createElement("p");
            let paraContent = document.createTextNode(json.fruits[0]);
            para.appendChild(paraContent);
            document.querySelector("body").appendChild(para);
        
        
	})
	.catch((error) => {
		let para = document.createElement("p");
        let paraContent = document.createTextNode("There was an error " + error);
		para.appendChild(paraContent);
        document.querySelector("body").appendChild(para);

	});

*/

let button = document.querySelector("button");
let textInput = document.querySelector("#textInput");
button.addEventListener("click", (event) =>{
    event.preventDefault();
    if(document.querySelectorAll("img")){
        let images = document.querySelectorAll("img");
        images.forEach(elem =>{elem.remove();});
    }
    
    if (textInput != ""){
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + textInput.value)
        .then((response) => response.json())
        .then((json) => {
            json.data[0].card_images.forEach(element => {
                let img = document.createElement("img");
                img.src = element.image_url;
                document.querySelector("body").appendChild(img);
            });
            
            
        })
        textInput.value = "";
    }

});