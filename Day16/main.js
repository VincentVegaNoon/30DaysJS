//Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()
// const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];

// const txt = JSON.stringify(skills);
// console.log(txt);
//2 Stringify the age variable
let age = 250;
const ageVariable = JSON.stringify(age);
console.log(ageVariable);
//3 Stringify the isMarried variable
let isMarried = true;
const isMarriedVariable = JSON.stringify(isMarried);
console.log(isMarriedVariable);
//4 Stringify the student object

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const studentObject = JSON.stringify(
  student,
  ["firstName", "lastName", "age", "isMarried", "skills"],
  4
);
console.log(studentObject);

//Exercises Level 2
//1 Stringify the students object with only firstName, lastName and skills properties
const studentObject2 = JSON.stringify(
  student,
  ["firstName", "lastName", "skills"],
  4
);
console.log(studentObject2);
//Exercises Level 3
//1 Parse the txt JSON to object.
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;
const txtObj = JSON.parse(txt);
console.log(txtObj);

//2 Find the user who has many skills from the variable stored in txt.
const data = JSON.parse(txt);

const userWithMostSkills = Object.keys(data).reduce((maxSkillsUser, user) => {
  if (
    !maxSkillsUser ||
    data[user].skills.length > data[maxSkillsUser].skills.length
  ) {
    return user;
  } else {
    return maxSkillsUser;
  }
}, null);
console.log(`The user with the most skills is: ${userWithMostSkills}`);
