/*Змінні для зберігання ім'я та групи*/
let userName = "";
let userGroup = "";

function openForm() {
    document.getElementById("RegistrForm").style.display = "block";
}

function closeForm() {
    document.getElementById("RegistrForm").style.display = "none";
}

function openTest() {
    userName = document.getElementById("name").value;
    userGroup = document.getElementById("group").value;
    const user = new User(); 
    user.parse();
    const student = new Student(); 
    student["name"] = user["name"]; 
    student.parse();

    Student.prototype.showData = function () {
        return `Прізвище та Ім'я ${this.name}\n Група ${this.group}`;
    }
    
    console.log(student.name, student.group);
    document.getElementById("RegistrForm").style.display = "none";
    document.getElementById("mainButton").style.display = "none";
    document.getElementById("BlockTest").style.display = "block";
}

function shuffleAnswers() {
    const questions = ["q1", "q2", "q5", "q6", "q7", "q8", "q9", "q10"];

    questions.forEach(question => {
        const answers = document.getElementById(question + "-answers");
        for (let i = answers.children.length; i >= 0; i--) {
            answers.appendChild(answers.children[Math.random() * i | 0]);
        }
    });
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);    
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

async function checkAnswers() {
    /*завдання 1*/
    var totalPoints = 0;
    const q1a1 = document.getElementById("q1a1");
    if (q1a1.checked) {
        totalPoints += +q1a1.value;
    }
    /*Завдання 2*/
    const q2a1 = document.getElementById("q2a1");
    const q2a2 = document.getElementById("q2a2");
    const q2a3 = document.getElementById("q2a3");
    const q2a4 = document.getElementById("q2a4");

    if (q2a1.checked && q2a2.checked && !q2a3.checked && !q2a4.checked) {
        // Обидва правильні варіанти вибрані
        totalPoints += 2;
    }
    /*Завдання 3*/
    const q3a3 = document.getElementById("q3a3");
    if (q3a3.selected) {
        totalPoints += +q3a3.value;
    }
    /*Завдання 4 */
    const q4q1 = document.getElementById("target1");
    if (q4q1.lastChild.textContent == "1" && q4q1.children.length == 1)
        totalPoints += parseInt(1);
    const q4q2 = document.getElementById("target2");
    if (q4q2.lastChild.textContent == "3" && q4q2.children.length == 1)
        totalPoints += parseInt(1);
    const q4q3 = document.getElementById("target3");
    if (q4q3.lastChild.textContent == "2" && q4q3.children.length == 1)
        totalPoints += parseInt(1);
    /*завдання 5 */
    const q5a2 = document.getElementById("q5a2");
    if (q5a2.checked) {
        totalPoints += +q5a2.value;
    }
    /**Завданян 6 */
    const q6a1 = document.getElementById("q6a1");
    if (q6a1.checked) {
        totalPoints += +q6a1.value;
    }
    /**завдання 7 */
    const q7a2 = document.getElementById("q7a2");
    if (q7a2.checked) {
        totalPoints += +q7a2.value;
    }
    /*завдання 8*/
    const q8a1 = document.getElementById("q8a1");
    if (q8a1.checked) {
        totalPoints += +q8a1.value;
    }
    /*завдання 9*/
    const q9a1 = document.getElementById("q9a1");
    if (q9a1.checked) {
        totalPoints += +q9a1.value;
    }
    /*завдання 10*/
    const q10a1 = document.getElementById("q10a1");
    if (q10a1.checked) {
        totalPoints += +q10a1.value;
    }

    document.getElementById("BlockTest").style.display = "none";
    document.getElementById("Repeat").style.display = "inline-block";
    document.getElementById("total_points").innerHTML = "Total points: " + totalPoints + "/13" + "<br>" +
    "Прізвище та Ім'я: " + userName + "<br>" +
    "Група: " + userGroup;
    window.progres.try += 1;
    window.progres.grade.push(totalPoints);
    window.progres.parse();
}

function RepeatTest() {
    document.getElementById("total_points").innerHTML = "";
    document.getElementById("Repeat").style.display = "none";
    document.getElementById("BlockTest").style.display = "block";
}

class User {
    constructor() {
        this.name = null;
    }

    parse() {
        this.name = document.querySelector("#name").value;
    }
}

class Student extends User { 
    constructor() {
        super();
        this.group = null;
    }

    delete() {
        this.name = null;
        this.group = null;
    }

    change(name, group) {
        this.name = name;
        this.group = group;
    }

    parse() {
        this.name = document.querySelector("#name").value;
        this.group = document.querySelector("#group").value;
    }
}