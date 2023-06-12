var twoD = [
[1, 2, 3, 3.5],
[4,5,6,6.5],
[7,8,9],
[0]

]

/*
document.write("The following is going to print nine : "+ twoD[2][2]); 
*/


for (var i = 0 ;i< twoD.length ; i++ ){

    for(var j = 0 ; j<twoD[i].length; j++ ){

        document.write(twoD[i][j]);
        document.write(" ") ; 
    } 
        document.write("<p> </p>") ; 
}