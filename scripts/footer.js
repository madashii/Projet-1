const createCardStudent = (studentName,platform,platformUrl) => {
    const footerStudents = document.querySelector(".footer-students-list");
    const divLi = document.createElement("li");
    divLi.classList.add("footer-students-info");
    const divA = document.createElement("a");
    divA.setAttribute("href", `${platformUrl}`);
    divA.setAttribute("target", "_blank");
    divLi.appendChild(divA);
    const divI = document.createElement("i");
    divI.classList.add("fa-brands", `fa-${platform}`);
    divA.appendChild(divI);
    divA.innerHTML += `${studentName}`;
    return footerStudents.appendChild(divLi);
}

const displayCardStudent = (users, platform) => {
    users.forEach((user) => {
        switch(platform) {
            case "github":
                createCardStudent(user.name,platform,user.github);
                break;
            case "linkedin":
                createCardStudent(user.name,platform,user.linkedin);
                break;
        }
    });
}

const deleteCardsStudent = () => {
    const footerStudents = document.querySelector(".footer-students-list");
    footerStudents.innerHTML = "";
}

users = [{name :"Joris", github : "https://github.com/jorisgrls", linkedin : "https://urllinkedinjoris.com"},
         {name :"Lucas", github : "https://github.com/madashii", linkedin : "https://urllinkedinlucas.com"},
         {name :"Dimitri", github : "https://github.com/CHOUMMANIVONGDimitri", linkedin : "https://urllinkedindimitri.com"},
         {name :"Maxime", github : "https://github.com/Milimaks", linkedin : "https://urllinkedinmaxime.com"}
        ];


const footerLinks = document.querySelectorAll(".footer-links-site");
const footerStudents = document.querySelector(".footer-students-list");
footerLinks.forEach((link) => {
    link.addEventListener("click", () => {
        deleteCardsStudent();
        const platform = link.getAttribute("data-platform");
        displayCardStudent(users,platform);

    });
});

displayCardStudent(users,"github");

