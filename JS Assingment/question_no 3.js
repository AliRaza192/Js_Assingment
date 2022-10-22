// Question No 3

let Names = "Muhammad";
let upperCase = Names.toUpperCase();  
let lowerCase = Names.toLowerCase();
let titleCase = Names.toLocaleLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase()); 

document.write(upperCase); 
document.write(lowerCase);
document.write(titleCase);
