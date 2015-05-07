// CH2 Arrays

// Q1:

var Student = function(na){
    this.name = na;
    this.grades = [];

    this.addGrade = function(grade) {
        this.grades.push(grade);
        return this.grades;
    };

    this.averageGrade = function() {
        var total = 0;
        for(i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }
        return (total/this.grades.length);
    }
}

var frank = new Student('frank');
frank.addGrade(20);
frank.addGrade(30);
frank.addGrade(40);

console.log(frank.averageGrade());

//Q2
var arr = ["foo", "bar", "baz"];
var forward = "";
var backward = "";

for(i = 0; i < arr.length; i++) {
    forward += arr[i];
}

console.log('forward', forward);

for(i = (arr.length-1); i >= 0; i--) {
    backward += arr[i];
}

console.log('backward', backward);

// Q3
// Note: I don't like this pattern much. Refactor
function Temps() {
    this.dataStore = [
        [],
        [],
        [],
        []
    ];
    this.add = add;
    this.average = average;
    
    this.weekAverage = weekAverage;
    this.arrAverage = arrAverage;
    this.monthAverage = monthAverage;
    this.averageByWeek = averageByWeek;
}

function add(temps, week) {
    this.dataStore[week] = temps;
}

function monthAverage() {
    // the requirements are such that we can do the easiest thing that could
    // possibly work. If the requirements change, this can be refactored
    // into something that enumerates
    return (this.weekAverage(0) + 
            this.weekAverage(1) + 
            this.weekAverage(2) + 
            this.weekAverage(3)) / 4;
}

function weekAverage(weekNumber) {
    return arrAverage( this.dataStore[weekNumber] );
}

function arrAverage(arr){
  
        var total = 0;
        for(i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return (total/arr.length);
}

function averageByWeek() {
    return {
        0: this.weekAverage(0),
        1: this.weekAverage(1),
        2: this.weekAverage(2),
        3: this.weekAverage(3)
    }
}

// add weeks worth of data at a time:
var temps = new Temps();

temps.add([21,22,23,24,25,26,27], 0);
temps.add([31,32,33,34,35,36,37], 1);
temps.add([41,42,43,44,45,46,47], 2);
temps.add([51,52,53,54,55,56,57], 3);


//temps.monthAverage();
//temps.weekAverage(3);
//temps.averageByWeek();

var LettersToWord = function() {
    this.letters = [];

    this.toWord = function() {
        var word = "";
        for(i=0; i < this.letters.length; i++) {
            word += this.letters[i];
        }
        return word;
    }
}

var ltw = new LettersToWord();
ltw.letters.push("B");
ltw.letters.push("r");
ltw.letters.push("y");
ltw.letters.push("c");
ltw.letters.push("e");
ltw.toWord();
