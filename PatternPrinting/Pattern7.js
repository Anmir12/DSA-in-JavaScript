/*
*---*
**-**  // upper triangle  => left stars = row and right stars= row and spaces = n-row
*****  // middel triangle
**-**
*---*  //lower triangle

*/

function upperTriangle(n){
  for(let row=1; row<=(n-1)/2; row++){
    let str="";
    let leftStars = row;
    for(let i=1; i<=leftStars;i++){
        str+="*";
    }
    let spaces = n-2*row;
    for(let j=1; j<=spaces; j++){
        str+=" ";
    }
    let rightStars = row;
    for(let k=1; k<=rightStars; k++){
        str+="*";
    }
    console.log(str);
  }
}


function middelTriangle(n){
         let str="";
        for(let col=1; col<=n; col++){
            str+="*";
        }
        console.log(str);
    
}

function lowerTriangle(n){
for (let row = 1; row<=(n-1)/2; row++){
    let str="";
    let leftStars = (n-1)/2 -row + 1;
    for(let i=1; i<=leftStars;i++){
        str+="*";
    }
    let spaces = 2*row - 1;
    for(let j=1; j<=spaces;j++){
        str+=" ";
    }
    let rightStars = (n-1)/2 -row + 1
    for(let k=1; k<=rightStars; k++){
        str+="*";
    }
    console.log(str);
}
}

function Pattern7(n){
    upperTriangle(n);
    middelTriangle(n);
    lowerTriangle(n);

}

Pattern7(7)