const developers = [
  {
    fullname: "Aarav Sharma",
    image: "https://picsum.photos/200/200?person=1",
    profession: "Frontend Developer",
    description: "Specializes in building clean, responsive, and interactive user interfaces using React and modern JavaScript.",
    tags: ["frontend", "react", "ui/ux", "javascript"]
  },
  {
    fullname: "Priya Desai",
    image: "https://picsum.photos/200/200?person=2",
    profession: "Backend Developer",
    description: "Expert in building scalable REST APIs, authentication systems, and database architectures.",
    tags: ["backend", "nodejs", "express", "database"]
  },
  {
    fullname: "Rohan Verma",
    image: "https://picsum.photos/200/200?person=3",
    profession: "Full Stack Developer",
    description: "Builds complete web applications from UI to server and database using the MERN stack.",
    tags: ["fullstack", "mern", "mongodb", "react", "nodejs"]
  },
  {
    fullname: "Sara Khan",
    image: "https://picsum.photos/200/200?person=4",
    profession: "Mobile App Developer",
    description: "Creates high-performance Android and iOS apps using React Native and Flutter.",
    tags: ["mobile", "react-native", "flutter", "android", "ios"]
  },
  {
    fullname: "Dev Patel",
    image: "https://picsum.photos/200/200?person=5",
    profession: "DevOps Engineer",
    description: "Automates deployment pipelines, manages cloud infrastructure, and monitors system performance.",
    tags: ["devops", "docker", "aws", "kubernetes", "cicd"]
  }
];

sum = 0;

developers.forEach(function(elem){
    sum += `<div class="card">
            <img src="${elem.image}" alt="">
            <h2>${elem.fullname}</h2>
            <h3>${elem.profession}</h3>
            <p>${elem.description}</p>
        </div>`
});

let main = document.querySelector("#main");
main.innerHTML = sum;

