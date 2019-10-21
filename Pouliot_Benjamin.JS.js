var prixBase;
var taxe;
var legumes;
var pepperoni;
var sauce;
var coutTotal;
var ingredient;

ingredient = number=prompt("Que voulez vous sur votre pizza?");

prixBase=10;
legumes= 5;
pepperoni= 8;
sauce= 1;
taxe= 0.14975;

if(ingredient === legumes){
    coutTotal= prixBase + legumes;
}
   else if (ingredient === sauce){
        coutTotal= prixBase + sauce;
    }

     else if(ingredient === pepperoni){
            coutTotal= prixBase + pepperoni;
    }


else {
    coutTotal= prixBase;
}



document.write("Pour 6 pizza avec: <br> de la sauce <br> des légumes <br>le cout sera de :<br> $" + coutTotal*6 + (coutTotal*taxe));
