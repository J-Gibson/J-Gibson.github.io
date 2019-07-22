$("#poster").submit(function (e) {
    e.preventDefault();
    
    console.log("Creating Post...");
    
    var imgUrl = document.getElementById("url").value;
    var img = document.createElement("IMG");
    var text = document.getElementById("text").value;
    var caption = document.createElement("p");
    var post = document.createElement("DIV");
    var x = document.createElement("text");
    var postId = String(Math.random()*9999999999999999);
    
    img.src = imgUrl;
    img.classList = "postImg";
    
    caption.innerHTML = text;
    caption.classList = "caption";
    
    x.innerHTML = "X";
    x.classList = "delete";
    
    
    post.appendChild(x);
    post.appendChild(img);
    post.appendChild(caption);
    post.classList = "post";
    post.id = postId;
    document.getElementById("wall").appendChild(post);
    
    console.log("Posted!");
});

function toPro() {
    window.open("gram_profile.html","_self");
};