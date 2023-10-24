const biodata = {
  name: "Spongebob",
  age: 30,
  hobbies: ["cooking", "catching jellyfish", "annoy squidward"],
  IsMarried: false,
  schoolList: [
    {
    schoolName: "Europeesche Lagere School",
    yearIn: "1909", 
    yearOut:"1915", 
    major: null
    },{
    schoolName: "Hoogere Burger School",
    yearIn: "1915", 
    yearOut:"1921", 
    major: null
    },{
    schoolName: "Technise Hoogenschool te Bandoeng",
    yearIn: "1922", 
    yearOut:"1926", 
    major: "Teknik Sipil"
    }
  ],
  skills: [
    {
    skillName: "cooking",
    Level: "expert",
    },{
    skillName: "driving",
    Level: "beginner",  
    },{
    skillName: "fishing",
    Level: "advance",  
    }
  ],
  interestInCoding:false
}

console.log(biodata.schoolList.yearIn);