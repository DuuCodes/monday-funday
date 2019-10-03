var cars = [ {
    make: 'Honda', 
    model: 'Civic',
    year: 2018
},{
    make:'Ford', 
    model: 'mustang', 
    year: 2009
},{
    make:'Ford', 
    model: 'mustang', 
    year: 2009
}]

let oldCars = cars.filter((car) =>{return car.year <=2019})

console.log(oldCars);
