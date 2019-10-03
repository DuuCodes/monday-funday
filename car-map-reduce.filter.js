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

let oldCars = cars.filter((car) =>{return car.year <= 2019})


// return an objet for each car that includes the existing data as well
// as a single full string property named 'display'
// for example '2012' ford fusion

let displayData = oldCars.map((car) => 
{let result = car 
    result.display = car.year + '' + car.make + '' + car.model 
    return result}

    console.log(displayData);
