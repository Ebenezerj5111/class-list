
let rel = document.getElementById("rel-btn")

// add

let add = document.getElementById("add btn")

add.addEventListener("click", function () {
    rel.classList.add("color")
})


// remove

let remo = document.getElementById("rem btn")

// remo.addEventListener("click", function () {
//     rel.classList.remove("color")
// })

remo.addEventListener("click", function () {
    if (rel.classList.contains("color")) {
        rel.classList.remove("color")
    }

    else if (rel.classList.contains("newcolor")) {
        rel.classList.remove("newcolor")
    }

    else {
        alert("There is no color")
    }

})

// replace

let rep = document.getElementById("rep btn")

rep.addEventListener("click", function () {
    rel.classList.replace("color", "newcolor")
})

// contains

let con = document.getElementById("cont btn")

con.addEventListener("click", function () {
    if (rel.classList.contains("color")) {
        alert("This is old color")
    }

    else if (rel.classList.contains("newcolor")) {
        alert("This is new color")
    }

    else {
        alert("There is no color")
    }
})

// toggle

let tog = document.getElementById("tog btn")

tog.addEventListener("click", function () {
    rel.classList.add("color")
    rel.classList.toggle("newcolor")
})




