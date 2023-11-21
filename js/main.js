let team=[
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"

    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"

    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"

    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"

    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"

    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"

    },

];

//----------stampa su console: -------------
printObjects(team[1]);
printTable(team);


//---------Stampa su html: ---------

//printObjectsInHTML(team[1]);
//printTableInHTML(team);

//printArrayInHTML(team);

cardsInHTML(team);









//-------------FUNZIONI-----------------


//-----su console:  ------

function printObjects(object){
    let objectInString= "";
    objectInString += "{\n";
    for (let key in object){
        objectInString += "\t" + key + ": "+ object[key]+ "\n" ;
    }
    objectInString+= "}";
    
    console.log(objectInString);
}

function printTable(array){
    for (let i=0; i< array.length; i++){
        printObjects(array[i]);
    }
   
    /*
    //OPPURE
    for (let i = 0; i < array.length; i++) {
    
        let object = array[i];

        console.log("informazioni della persona  n° " + (i + 1) + ":");
        printObjects(object);
    }
    */
}




//-------su HTML -------------

//---base-----
function createObjectsInHTML(object){

    for (let key in object){
        if (key!="image"){
            let p= document.createElement("p");
            let strong= document.createElement("strong"); 
            let keyText= document.createTextNode(key); 
            strong.appendChild(keyText);        
            let text= document.createTextNode(": " + object[key]); 
            p.appendChild(strong);
            p.appendChild(text); 
            document.body.appendChild(p);

        }
        else{
            let img= document.createElement("img");
            img.setAttribute("src", "./img/"+object[key]);
            img.setAttribute("style", "width: 200px;");
            document.body.appendChild(img);

        }
    }
}

function printArrayInHTML(array){
    for (let i=0; i< array.length; i++){
        createObjectsInHTML(array[i]);
        let newLine =document.createElement("hr");
        document.body.appendChild(newLine);
    }

}



/*
function printObjectsInHTML(object){
    let objectInString= "";
    for (let key in object){
        objectInString +=  key + ": "+ object[key]+ "<br>" ;
    }
   
    
    document.getElementById("tabella_nomi").innerHTML+=objectInString;

}

function printTableInHTML(array){
    document.getElementById("tabella_nomi").innerHTML +="ecco le informazioni. <br>";
    for (let i=0; i< array.length; i++){
        document.getElementById("tabella_nomi").innerHTML +="persona numero " +(i+1) + ": <br>";
        let objectPrinted=printObjectsInHTML(array[i]);
        
    }
   
    
}
*/




//----con cards----

function oneCardInHTML(object){
    let row=document.querySelector(".row");
    
    let card=document.createElement("div");
    card.classList.add("col-lg-4","p-3");
    card.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="./img/${object["image"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${object["name"]}</h5>
                <p class="card-text text-center">${object["role"]}</p>
            </div>
        </div>
        `;

    row.appendChild(card);
    
}

function cardsInHTML(array){
    for (let i=0; i<array.length; i++){
        oneCardInHTML(array[i]);
    }

}
