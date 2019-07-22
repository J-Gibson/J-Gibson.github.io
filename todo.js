$("#notegen").submit(function (e) {
    e.preventDefault();
    console.log("form submitted!");

    var note_input = document.getElementById("note");
    var note = note_input.value;

    addNote(note)

    note_input.value = "";
});

function addNote(note) {
    var post_it = document.createElement("div");
    post_it.classList.add("post_it");

    var text = document.createElement("p");
    text.innerHTML = note;

    console.log(note);

    post_it.appendChild(text);
    document.getElementById("wall").appendChild(post_it);

    console.log("Post-it Added!");

    post_it.addEventListener("click", function () {
        var post_it_id = String(Math.random());
        post_it.id = post_it_id;
        document.getElementById(post_it_id).remove();
        console.log("Post-it Removed!");
    });
}