const fetchName = (name) => fetch("https://animechan.xyz/api/" + name);

fetchName("naruto")
	.then((response) => response.json())
	.then((json) => {

        if(json.name && json.count){
            let para = document.createElement("p");
            let paraContent = document.createTextNode("age : " + json.age + "</br>count : " + json.count);
            para.appendChild(paraContent);
            document.querySelector("body").appendChild(para);
        } else {
            let para = document.createElement("p");
            let paraContent = document.createTextNode("There was an error : " + json.error);
            para.appendChild(paraContent);
            document.querySelector("body").appendChild(para);
        }
        
	})
	.catch((error) => {
		let para = document.createElement("p");
        let paraContent = document.createTextNode("There was an error " + error);
		para.appendChild(paraContent);
        document.querySelector("body").appendChild(para);

	});