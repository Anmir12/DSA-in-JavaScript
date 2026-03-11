/*
---*
--***
-*****         //let stars = 2*r-1  and 
*******
-*****        // row = spaces     and stars=
--***
---*

*/

function upperTriangle(n){
    for(let row=1; row<=n; row++){
        let str='';
        let spaces=n-row;
     for(let col=1; col<=spaces;col++){
        str+=" ";
     }
     let stars = 2*row-1;
     for(let col=1; col<=stars; col++){
        str+="*"
     }
     console.log(str);
    }
}


function lowerTriangle(n){
for(let row=1; row<=n; row++){
    let str = "";
    let spaces = row;
    for(let col = 1; col<=spaces; col++){
        str+=" ";
    }
    let stars = 2*(n-row)-1;
    for(let col = 1; col<=stars; col++){
        str+="*";
    }
    console.log(str);
}
}

function Pattern6(n){
    upperTriangle(n);
    lowerTriangle(n);

}

Pattern6(8);