const mockData1 = {
    login: "buildingBuild",
    id: 202376688,
    node_id: "U_kgDODBAF8A",
    avatar_url: "https://avatars.githubusercontent.com/u/202376688?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/buildingBuild",
    html_url: "https://github.com/buildingBuild",
    followers_url: "https://api.github.com/users/buildingBuild/followers",
    following_url: "https://api.github.com/users/buildingBuild/following{/other_user}",
    gists_url: "https://api.github.com/users/buildingBuild/gists{/gist_id}",
    starred_url: "https://api.github.com/users/buildingBuild/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/buildingBuild/subscriptions",
    organizations_url: "https://api.github.com/users/buildingBuild/orgs",
    repos_url: "https://api.github.com/users/buildingBuild/repos",
    events_url: "https://api.github.com/users/buildingBuild/events{/privacy}",
    received_events_url: "https://api.github.com/users/buildingBuild/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 7,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2025-03-08T04:55:16Z",
    updated_at: "2025-06-13T22:43:40Z",
    user_view_type: "public"
};


const mockData2 = {
    login: "buildingBuild",
    id: 202376688,
    node_id: "U_kgDODBAF8A",
    avatar_url: "https://avatars.githubusercontent.com/u/202376688?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/buildingBuild",
    html_url: "https://github.com/buildingBuild",
    followers_url: "https://api.github.com/users/buildingBuild/followers",
    following_url: "https://api.github.com/users/buildingBuild/following{/other_user}",
    gists_url: "https://api.github.com/users/buildingBuild/gists{/gist_id}",
    starred_url: "https://api.github.com/users/buildingBuild/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/buildingBuild/subscriptions",
    organizations_url: "https://api.github.com/users/buildingBuild/orgs",
    repos_url: "https://api.github.com/users/buildingBuild/repos",
    events_url: "https://api.github.com/users/buildingBuild/events{/privacy}",
    received_events_url: "https://api.github.com/users/buildingBuild/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 7,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "2025-03-08T04:55:16Z",
    updated_at: "2025-06-13T22:43:40Z",
    user_view_type: "public"
};

const mockData1Repo = [
    {
        name: "BlueModoro",
        description:
            "This is an aestheic sleek and responsive Pomodoro timer app designed to help with focus and productivity while also motivating users",
        language: "CSS",
        url: "https://github.com/buildingBuild/BlueModoro",
        homepage: "https://bluemodoro.vercel.app",
    },
    {
        name: "buildingBuild",
        description: "Config files for my GitHub profile.",
        language: null,
        url: "https://github.com/buildingBuild/buildingBuild",
        homepage: "https://github.com/buildingBuild",
    },
    {
        name: "Github-wars",
        description:
            "A fun game whereby you test your github profile stats against your friends and see who wins",
        language: "HTML",
        url: "https://github.com/buildingBuild/Github-wars",
        homepage: null,
    },
    {
        name: "One-piece-Crud-Application",
        description:
            "This is was a fun smalll project I did a while back in my first cs class that lets you save various information on pirates in the one piece universe ",
        language: "C++",
        url: "https://github.com/buildingBuild/One-piece-Crud-Application",
        homepage: null,
    },
    {
        name: "PhoneBook",
        description:
            "Phone Book console application used for practicing maps and keys used in data structures",
        language: "C++",
        url: "https://github.com/buildingBuild/PhoneBook",
        homepage: null,
    },
    {
        name: "Soundify",
        description:
            "A Music Application  that lets users create, organize and manage songs. Create playlists.",
        language: "C++",
        url: "https://github.com/buildingBuild/Soundify",
        homepage: null,
    },
    {
        name: "Vending-Machine-Project",
        description:
            "My program is a text-based vending machine program that allows users to buy drinks, restock drink inventory, and manage drink/product information through a terminal interface. It uses a file handling system to save and load inventory data, ensuring that changes can be accessed by other files.",
        language: "C++",
        url: "https://github.com/buildingBuild/Vending-Machine-Project",
        homepage: null,
    },
];

const mockData2Repo = [
    {
        name: "BlueModoro",
        description:
            "This is an aestheic sleek and responsive Pomodoro timer app designed to help with focus and productivity while also motivating users",
        language: "CSS",
        url: "https://github.com/buildingBuild/BlueModoro",
        homepage: "https://bluemodoro.vercel.app",
    },
    {
        name: "buildingBuild",
        description: "Config files for my GitHub profile.",
        language: null,
        url: "https://github.com/buildingBuild/buildingBuild",
        homepage: "https://github.com/buildingBuild",
    },
    {
        name: "Github-wars",
        description:
            "A fun game whereby you test your github profile stats against your friends and see who wins",
        language: "HTML",
        url: "https://github.com/buildingBuild/Github-wars",
        homepage: null,
    },
    {
        name: "One-piece-Crud-Application",
        description:
            "This is was a fun smalll project I did a while back in my first cs class that lets you save various information on pirates in the one piece universe ",
        language: "C++",
        url: "https://github.com/buildingBuild/One-piece-Crud-Application",
        homepage: null,
    },
    {
        name: "PhoneBook",
        description:
            "Phone Book console application used for practicing maps and keys used in data structures",
        language: "C++",
        url: "https://github.com/buildingBuild/PhoneBook",
        homepage: null,
    },
    {
        name: "Soundify",
        description:
            "A Music Application  that lets users create, organize and manage songs. Create playlists.",
        language: "C++",
        url: "https://github.com/buildingBuild/Soundify",
        homepage: null,
    },
    {
        name: "Vending-Machine-Project",
        description:
            "My program is a text-based vending machine program that allows users to buy drinks, restock drink inventory, and manage drink/product information through a terminal interface. It uses a file handling system to save and load inventory data, ensuring that changes can be accessed by other files.",
        language: "C++",
        url: "https://github.com/buildingBuild/Vending-Machine-Project",
        homepage: null,
    },
];

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let running = false;
let userName1;
let userName2;

let data1 = null;
let data2 = null;

let data1repo = null;
let data2repo = null;


let points1 = 0;
let points2 = 0;

let points1B = 0;
let points2B = 0;

let Projectcounter1 = 0;
let Projectcounter2 = 0;

const languages1 = new Set();
const languages2 = new Set();

let followers1 = 0;
let followers2 = 0;

let following1 = 0;
let following2 = 0;

const bigdiv = document.getElementById("bigdiv");
bigdiv.style.display = "none"

let useCounter = 0;

let everChangingText = document.getElementById("everChangingText");
everChangingText.style.display = "none";





// getRelevantInfo(); // jump passing
async function getusers() {

    if (useCounter == 1) {
        location.reload();

    }
    useCounter += 1;


    const input1work = document.getElementById("user1input");
    const input2work = document.getElementById("user2input");

    if (running == true) {
        return;
    }
    running = true;
    everChangingText.style.display = "block";

    userName1 = input1.value;
    userName2 = input2.value;


    console.log(userName1);
    console.log(userName2);


    // userName1
    try {
        const response = await fetch(`https://api.github.com/users/${userName1}`);
        if (!response.ok) {
            throw new Error("Not found")
        }
        data1 = await response.json();

        console.log(data1);
        console.log(data1.id);
        input1work.style.visibility = "hidden";
    }
    catch (Error) {
        console.error(`Error ${Error}`);
        input1work.style.visibility = "visible";
        return;
    }
    //userName2
    try {
        const response = await fetch(`https://api.github.com/users/${userName2}`);
        if (!response.ok) {
            throw new Error("Not found")
        }
        data2 = await response.json();

        console.log(data2);
        console.log(data2.id);
        input2work.style.visibility = "hidden";

    }
    catch (Error) {
        console.error(`Error ${Error}`);
        input2work.style.visibility = "visible";
        return;
    }

    // userName 1 repo
    try {
        const response = await fetch(`https://api.github.com/users/${userName1}/repos`);
        if (!response.ok) {
            throw new Error("Not found")
        }
        data1repo = await response.json();

        console.log(data1repo);
        input1work.style.visibility = "hidden";
    }
    catch (Error) {
        console.error(`Error ${Error}`);
        input1work.style.visibility = "visible";
        return;
    }

    // userName 2 repo

    try {
        const response = await fetch(`https://api.github.com/users/${userName2}/repos`);
        if (!response.ok) {
            throw new Error("Not found")
        }
        data2repo = await response.json();

        console.log(data2repo);
        input2work.style.visibility = "hidden";
    }
    catch (Error) {
        console.error(`Error ${Error}`);
        input2work.style.visibility = "visible";
        return;
    }

    everChangingText.textContent = "Getting Relevant Info...";
    //  https://api.github.com/users/{username}/repos
    getRelevantInfo();



}


function getRelevantInfo() {
    console.log("GOT RELEVANT INFO")
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2");

    img1.setAttribute("src", data1.avatar_url);
    img2.setAttribute("src", data2.avatar_url);

    const user1 = document.getElementById("userName1Heading")
    const user2 = document.getElementById("userName2Heading")


    user1.textContent += data1.login;
    user2.textContent += data2.login;
    everChangingText.textContent = "Finding Profile Info...";

    findProfiles();
}


function findProfiles() {

    const emoji1 = document.getElementById("emoji1");
    const emoji2 = document.getElementById("emoji2");

    let points1result = document.getElementById("points1-A");
    let points2result = document.getElementById("points2-A");

    let user1true = findProfile1();
    if (user1true) {
        emoji1.setAttribute("src", "./images/green.png");
        points1 += 10;
    }
    else {
        emoji1.setAttribute("src", "./images/Blue-512.webp");
        points1 += 0;
        points1.textcontent = `Points: ${points1}`
    }
    let user2true = findProfile2();
    if (user2true) {
        emoji2.setAttribute("src", "./images/green.png");
        points2 += 10;
        points2.textcontent = `Points: ${points2}`
    } else {
        emoji2.setAttribute("src", "./images/Blue-512.webp");
        points2 += 0;
    }

    points1result.textContent = `Points: ${points1}`;
    points2result.textContent = `Points: ${points2}`;
    getProjects_Commits();


}

function findProfile1() {

    for (let i = 0; i < data1repo.length; i++) {

        if (data1repo[i].name == data1.login) {

            return true;
        }

    }
    return false;

    /*
        if (mockData1Repo[i].name == mockData1.login) {
    
            return true;
        }
    */
}

function findProfile2() {

    for (let i = 0; i < data2repo.length; i++) {



        if (data2repo[i].name == data2.login) {

            return true;
        }

    }
    return false;

}




async function getProjects_Commits() { // formerly was regular function then I realized

    await getProjects_Commits1();
    await getProjects_Commits2();  /// you can use await like this remember apis have to be fectchd


    let passableProjects_1 = Projectcounter1;
    let passableProjects_2 = Projectcounter2;

    console.log(`passable projects 1${passableProjects_1}`);
    console.log(`passable projects 2${passableProjects_2}`);
    console.log(`passable projects 1${passableProjects_1}`);

    let points1result = document.getElementById("points1-B");
    let points2result = document.getElementById("points2-B");
    const emoji1 = document.getElementById("emoji1-B");
    const emoji2 = document.getElementById("emoji2-B");

    let projectAmount1 = document.getElementById("allowedProject1");
    let projectAmount2 = document.getElementById("allowedProject2");



    if (passableProjects_1 == passableProjects_2) {
        points1 += 10;
        points2 += 10;
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/green.png");




    }
    else if (passableProjects_1 > passableProjects_2) {

        points1 += 10;
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/Blue-512.webp");


    }
    else if (passableProjects_2 > passableProjects_1) {
        points2 += 10;
        emoji2.setAttribute("src", "./images/green.png");
        emoji1.setAttribute("src", "./images/Blue-512.webp");

    }
    points1result.textContent = `Points: ${points1}`;
    points2result.textContent = `Points: ${points2}`;
    projectAmount1.textContent = `MVs repos/Projects:  ${Projectcounter1}`;
    projectAmount2.textContent = `MVs repos/Projects: ${Projectcounter2}`;

    everChangingText.textContent = "Getting commits Info....";
    getTechStack();




}

async function getProjects_Commits1() {

    for (let i = 0; i < data1repo.length; i++) {

        let repoName = data1repo[i].name;
        // let repoName = mockData1Repo[i].name;
        let response = await fetch(`https://api.github.com/repos/${userName1}/${repoName}/readme`);
        if (!response.ok) {
            continue;
        }

        let responseB = await fetch(`https://api.github.com/repos/${userName1}/${repoName}/commits?per_page=10`);
        if (!responseB.ok) {
            continue;
        }
        let commits = await responseB.json();
        let count = commits.length;

        if (count >= 5) {
            ++Projectcounter1
        }



    }




}

async function getProjects_Commits2() {

    for (let i = 0; i < data2repo.length; i++) {

        let repoName = data2repo[i].name;
        let response = await fetch(`https://api.github.com/repos/${userName2}/${repoName}/readme`);
        if (!response.ok) {
            continue;
        }

        let responseB = await fetch(`https://api.github.com/repos/${userName2}/${repoName}/commits?per_page=10`);
        if (!responseB.ok) {
            continue;
        }
        let commits = await responseB.json();
        let count = commits.length;

        if (count >= 5) {
            ++Projectcounter2;
        }



    }



}

async function getTechStack() {

    await getTechStack1();
    await getTechStack2();
    languages1.delete("null")
    languages2.delete("null")


    console.log(languages1);
    console.log(languages2);

    const techStackAmount1 = document.getElementById("techStack-1");
    const techStackAmount2 = document.getElementById("techStack-2");

    const point1result = document.getElementById("points1-C");
    const points2result = document.getElementById("points2-C");



    const emoji1 = document.getElementById("emoji1-C");
    const emoji2 = document.getElementById("emoji2-C");

    techStackAmount1.textContent = `Unique Tech stack amount: ${languages1.size}`;
    techStackAmount2.textContent = `Unique Tech stack amount: ${languages2.size}`;




    if (languages1.size == languages2.size) {
        points1 += 10;
        points2 += 10;
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/green.png");



    }
    else if (languages1.size > languages2.size) {
        points1 += 10;
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/Blue-512.webp");


    }
    else if (languages1.size < languages2.size) {
        points2 += 10;
        emoji2.setAttribute("src", "./images/green.png");
        emoji1.setAttribute("src", "./images/Blue-512.webp");

    }

    languages1.forEach((value) => {
        const newdiv = document.createElement("div");
        newdiv.textContent = value;
        newdiv.setAttribute("class", "languageBox");
        document.getElementById("techBox1").append(newdiv);
        languages1.delete(value);

    })

    languages2.forEach((value) => {
        const newdiv = document.createElement("div");
        newdiv.textContent = value;
        newdiv.setAttribute("class", "languageBox");
        document.getElementById("techBox2").append(newdiv);
        languages2.delete(value);

    })

    point1result.textContent = `Points: ${points1}`;
    points2result.textContent = `Points: ${points2}`;

    everChangingText.textContent = "oh someones popular....";

    getFollowersandForks();


}

async function getTechStack1() {
    for (let i = 0; i < data1repo.length; i++) {

        languages1.add(`${data1repo[i].language}`);

    }


}

async function getTechStack2() {
    for (let i = 0; i < data2repo.length; i++) {

        languages2.add(`${data2repo[i].language}`);

    }


}


async function getFollowersandForks() {
    followers1 = 0;
    followers2 = 0;

    following1 = 0;
    following2 = 0;

    const thefollowers1 = document.getElementById("followers1");
    const thefollowers2 = document.getElementById("followers2");

    const thefollowing1 = document.getElementById("following1");
    const thefollowing2 = document.getElementById("following2");

    const emoji1 = document.getElementById("emoji1-D")
    const emoji2 = document.getElementById("emoji2-D")

    await getFollowersandForks1();
    await getFollowersandForks2();


    thefollowers1.textContent = `Followers: ${followers1}`;
    thefollowers2.textContent = `Followers: ${followers2}`;

    thefollowing1.textContent = `Following: ${following1}`;
    thefollowing2.textContent = `Following: ${following2}`;

    if (followers1 == followers2) {
        points1 += 5;
        points2 += 5;

    }
    else if (followers1 > followers2) {
        points1 += 5;
    }
    else if (followers2 < followers1) {
        points1 += 5;
    }

    if (following1 == following2) {
        points1 += 5;
        points2 += 5;
    }
    else if (following1 > following2) {
        points1 += 5;
    }
    else if (following1 < following2) {
        points2 += 5;
    }


    if (followers1 + following1 == followers2 + following2) {
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/green.png");

    }
    else if (followers1 + following1 > followers2 + following2) {
        emoji1.setAttribute("src", "./images/green.png");
        emoji2.setAttribute("src", "./images/Blue-512.webp");

    }
    else if (followers1 + following1 < followers2 + following2) {
        emoji2.setAttribute("src", "./images/green.png");
        emoji1.setAttribute("src", "./images/Blue-512.webp");


    }
    const lastPoints1 = document.getElementById("points1-D");
    const lastPoints2 = document.getElementById("points2-D");

    lastPoints1.textContent = `Points: ${points1}`;
    lastPoints2.textContent = `Points: ${points2}`;
    everChangingText.textContent = "Finding the winner...";
    getWinner();
}


async function getFollowersandForks1() {

    followers1 = data1.followers;
    following1 = data2.following;

}

async function getFollowersandForks2() {
    followers2 = data2.followers;
    following2 = data2.following;
}


function getWinner() {
    const img1finale = document.getElementById("winnerImage-one");
    const img2finale = document.getElementById("winnerImage-two");
    const screen2 = document.getElementById("screen2");
    const winningScreen1 = document.getElementById("winningScreen1");
    const winningScreen2 = document.getElementById("winningScreen2");

    finalepoints1 = document.getElementById("finalepoints1");
    finalepoints2 = document.getElementById("finalepoints2");



    if (points1 == points2) {

        let winnerText = document.getElementById("winnerText");
        winnerText.textContent = "FIERCE BATTLE, YOU BOTH ARE WINNERS ! "
        screen2.style.display = "flex";
        img1finale.setAttribute("src", data1.avatar_url);
        img2finale.setAttribute("src", data2.avatar_url);
        winningScreen1.style.display = "none";
        winningScreen2.style.display = "none";
        finalepoints1.textContent = `Points: ${points1}/40`
        finalepoints2.textContent = `Points: ${points2}/40`
    }




    if (points1 > points2) {
        img1finale.setAttribute("src", data1.avatar_url)
        screen2.style.display = "none";
        winningScreen1.style.display = "block";
        winningScreen1.textContent = `User ${data1.login} won by ${points1 - points2} points`;
        finalepoints1.textContent = `Points: ${points1}/40`
    }
    if (points2 > points1) {
        img2finale.setAttribute("src", data2.avatar_url);
        screen2.style.display = "none";
        winningScreen1.style.display = "block";
        winningScreen1.textContent = `User ${data2.login} won by ${points2 - points1} points`;
        finalepoints1.textContent = `Points: ${points2}/40`
    }

    running = false;
    bigdiv.style.display = "block"
    everChangingText.textContent = "Done!!!";
}


function pageNavigation() {
    window.location.href = "works.html";

}

function githubnav() {
    window.location.href = "https://github.com/buildingBuild";
}

// getuser();

/*
Users: https://api.github.com/users/{username}
Repos: https://api.github.com/users/{username}/repos
Issues: https://api.github.com/repos/{owner}/{repo}/issues
Commits: https://api.github.com/repos/{owner}/{repo}/commits
*/
// https://api.github.com/repos/buildingBuild/BlueModoro/readme