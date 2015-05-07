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
