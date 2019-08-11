$("#form_id").submit(function(e) {
    e.preventDefault();
    var link = document.getElementById('link_input').value;
    console.log(link);
    var img = document.createElement("IMG");
    img.src = link;
    var container = document.getElementById("container")
   container.appendChild(img);
    
});
