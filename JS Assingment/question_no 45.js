
// Question No 45


let cars = (make, model, option) =>{
    let information = {make, model, ...option};
    console.log(information)
}

cars("Tesla", "2020", {color: "Black"})
