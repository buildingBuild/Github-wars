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





const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
let running = false;
let userName1;
let userName2;
let data1 = null;
let data2 = null;



let userName1Override = "buildingBuild";
let userName2Override = "buildingBuild";
getRelevantInfo() // jump passing
async function getusers() {


    /*
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
            const response = await fetch(`https://api.github.com/users/${userName1Override}`);
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
            const response = await fetch(`https://api.github.com/users/${userName2Override}`);
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
    
    
    
        getRelevantInfo()
        running == true;
    
    
    */
}


function getRelevantInfo() {
    console.log("GOT RELEVANT INFO")
    const img1 = document.getElementById("img1")
    const img2 = document.getElementById("img2");

    img1.setAttribute("src", mockData1.avatar_url);
    img2.setAttribute("src", mockData2.avatar_url);

    const user1 = document.getElementById("userName1Heading")
    const user2 = document.getElementById("userName2Heading")


    user1.textContent += mockData1.login
    user2.textContent += mockData2.login
}



// getuser();

/*
Users: https://api.github.com/users/{username}
Repos: https://api.github.com/users/{username}/repos
Issues: https://api.github.com/repos/{owner}/{repo}/issues
Commits: https://api.github.com/repos/{owner}/{repo}/commits
*/