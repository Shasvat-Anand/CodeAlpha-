var fullbox = document.getElementById("fullimage")
var fullimg = document.getElementById("fullimg")

function openimg(pic) {
    fullbox.style.display = "flex";
    fullimg.src = pic;
    // fullbox.style.objectFit="contain";
    
}

function closeimg(){
    fullbox.style.display="none"
}