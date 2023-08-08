const posts = [
    {
        avatar: "images/avatar-vangogh.jpg",
        name: "Vincent van Gogh",
        location: "Zundert, Netherlands",
        post: "images/post-vangogh.jpg",
        likes: 21,
        username: "vincey1853",
        comment: "just took a few mushrooms lol"
    },
    {
        avatar: "images/avatar-courbet.jpg",
        name: "Gustave Courbet",
        location: "Ornans, France",
        post: "images/post-courbet.jpg",
        likes: 4,
        username: "gus1819",
        comment: "i'm feelin a bit stressed tbh"

    },
    {
        avatar: "images/avatar-ducreux.jpg",
        name: "Joseph Ducreux",
        location: "Paris, France",
        post: "images/post-ducreux.jpg",
        likes: 152,
        username: "jd1735",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!"
    }
]

const postsEL = document.getElementById("posts")

renderPosts()

function renderPosts(){
    let postsStr = ""
    for(let i = 0; i < posts.length; i++){
        let avatar =  posts[i].avatar
        let name = posts[i].name
        let location = posts[i].location
        let post =  posts[i].post
        let likes = posts[i].likes
        let username = posts[i].username
        let comment = posts[i].comment
        
        postsStr += generatePost(avatar,name,location, post, likes, username, comment)
    }

    postsEL.innerHTML += postsStr
}

function generatePost(avatar,name,location, post, likes, username, comment){
    let postStr = 
        `
            <li>
            <div class="users-info">
                <img class="user-avatar" src="${avatar}" alt="${name}'s avatar">
                <div>
                    <a class="account-name bold-links" href="#">${name}</a>
                    <a class="location" href="#">${location}</a>
                </div>
            </div>
            <img class="post" src="${post}" alt="post by ${name}">
            <div>
                <button class="btn"> <img src="images/icon-heart.png"></button>
                <button class="btn"> <img src="images/icon-comment.png"></button>
                <button class="btn"> <img src="images/icon-dm.png"></button>
            </div>
            <div class="post-info">
                <a class="likes bold-links" href="#">${likes} likes</a>
                <p><a class="bold-links" href="#">${username}</a> ${comment}</p>
            </div>

            </li>

        `
    return postStr
}