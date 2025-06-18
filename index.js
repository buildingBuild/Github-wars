

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let running = false;
let userName1;
let userName2;






async function getusers() {

    const input1work = document.getElementById("user1input");
    const input2work = document.getElementById("user2input");

    if (running == true) {
        return;
    }
    running == true;
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
        const data1 = await response.json();

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
        const data2 = await response.json();

        console.log(data2);
        console.log(data2.id);
        input2work.style.visibility = "hidden";

    }
    catch (Error) {
        console.error(`Error ${Error}`);
        input2work.style.visibility = "visible";
        return;
    }



    getRelevantInfo()
    running == true;



}


function getRelevantInfo() {
    console.log("GOT RELEVANT INFO")
}
// getuser();

/*
Users: https://api.github.com/users/{username}
Repos: https://api.github.com/users/{username}/repos
Issues: https://api.github.com/repos/{owner}/{repo}/issues
Commits: https://api.github.com/repos/{owner}/{repo}/commits
*/