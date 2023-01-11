function exo1() {
    let superheroes = [
        "Superman",
        "Batman",
        "Iron Man",
        "Wonder Woman",
        "Black Widow",
        "Mighty Thor"
    ];

    for (hero of superheroes) {

        console.log(hero);
    }
}

function exo2() {
    let numbers = [23, 54, 145, 325, 42, 987, -21];

    for (number of numbers) {
        if (number >= 100) {
            console.log(number)
        }
    }
}

function exo3() {
    let data = [
        ["George", "Barack", "Donald"],
        [43, 44, 45],
        ["Superman", "Batman", "Iron Man"],
        ["Clark", "Bruce", "Tony"]
    ];

    for (elementData of data) {

        for (data of elementData) {
            console.log(data);
        }
    }
}

function exo4() {
    let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];

    let uniqueAges = [];
    
    for(let i=0;i<ages.length;i++){
        let found=false;
        
        for(let j=0;j<uniqueAges.length;j++)
        {
            if(ages[i]===uniqueAges[j]){
                found=true;
            }
        }
        if(found===false){
            uniqueAges.push(ages[i]);
        }
        else {
            found=false;
        }
    }
    console.log(uniqueAges);
}


function exo5() {
    let grades = [
        [12, 11, 18],
        [13, 17, 9],
        [10, 15, 8],
        [14, 18, 13]
    ];
    
    let averages=[];
    
    for(students of grades){
        let sum=0;
        
        for(let i=0;i<students.length;i++){
            sum=sum+students[i];
        }
        let average=sum/students.length;
        averages.push(average);
    }
    console.log(average)
}

window.addEventListener("DOMContentLoaded", function() {
    //exo1();
    //exo2();
    //exo3();
    //exo4();
    exo5();
})