let team=[
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-console.jpg"

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
        role: "Social MEdia Manager",
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

//console.log(team);

printObjects(team[1]);
printTable(team);


printObjectsInHTML(team[1]);
printTableInHTML(team);














//-------------FUNZIONI-----------------


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

function printObjectsInHTML(object){
    let objectInString= "";
    for (let key in object){
        objectInString +=  key + ": "+ object[key]+ "<br>" ;
    }
   
    
    document.getElementById("tabella_nomi").innerHTML+=objectInString;

}

function printTableInHTML(array){
    let stringArray ="";
    stringArray+="ecco le informazioni: <br>"
    for (let i=0; i< array.length; i++){
        stringArray+= "persona numero" +(i+1) + ": <br>";
        let objectPrinted=printObjectsInHTML(array[i]);
        stringArray+= objectPrinted;
    }
   
    
}