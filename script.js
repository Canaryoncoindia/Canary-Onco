
const rs = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 300,
    reset:true
});

rs.reveal('.content' , {delay:400, origin:'bottom'});
rs.reveal(' .content-image img', {delay:800, origin:'right'});
rs.reveal('.testimonial img ', {delay:430, origin:'bottom'});
// rs.reveal('.content-image ,' , {delay:430, origin:'top'});

let burger = document.querySelector(".burger")
let checkBox = document.getElementById("burger")
let hambur = document.querySelector(".hamburger")

burger.addEventListener("click", () => {
    if(checkBox.checked){
        hambur.style.transform = "translateX(0)"
    }else{
        hambur.style.transform = "translateX(100%)"
    }
})

