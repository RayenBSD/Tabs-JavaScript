onload = () => {
    
    var history = document.getElementById("history");
    var vision = document.getElementById("vision");
    var goals = document.getElementById("goals");

    var hd = document.getElementById("historyDiv");
    var vd = document.getElementById("visionDiv");
    var gd = document.getElementById("goalsDiv");

    history.addEventListener ("click", () => {
        hd.style.display = "block";
        vd.style.display = "none";
        gd.style.display = "none";
    });

    vision.addEventListener ("click", () => {
        hd.style.display = "none";
        vd.style.display = "block";
        gd.style.display = "none";
    });

    goals.addEventListener ("click", () => {
        hd.style.display = "none";
        vd.style.display = "none";
        gd.style.display = "block";        
    });
}