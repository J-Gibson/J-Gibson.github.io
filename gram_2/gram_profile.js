$("#profiler").submit(function (e) {
    e.preventDefault();
    
    var name = document.getElementById("name");
    name.innerHTML = document.getElementById("name_input").value;
    
    var proPic = document.getElementById("proPic");
    var proPicUrl = document.getElementById("proPic_input").value;
    proPic.src = proPicUrl;
    proPic.style.maxWidth = "100%";
    proPic.style.height = "auto";
    
    var bio = document.getElementById("bio");
    bio.innerHTML = document.getElementById("bio_input").value;
});

function toWall() {
    window.open("gram_wall.html","_self");
};
