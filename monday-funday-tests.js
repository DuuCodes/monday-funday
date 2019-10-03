const chores = [
    { name: 'Erase blackboard', doneBy: 'Jamal', minutes: 6 },
    { name: 'Take the trash out', doneBy: 'Ashley', minutes: 3 },
    { name: 'Sweep up', doneBy: 'Casey', minutes: 14 },
    { name: 'Feed the guinea pig', doneBy: 'Jamal', minutes: 8 },
    ]
    
    let jamalsTasks = chores.filter((chore)=> {
        return chore.doneBy === "Jamal" } )
        letJamalsTime = jamalsTasks.map (()=>{})