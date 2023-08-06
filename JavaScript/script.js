// JavaScript Code - By Abdul Waris

// Variables
let logo = document.getElementById('logo')
let a1 = document.getElementById('a1')
let a2 = document.getElementById('a2')
let a3 = document.getElementById('a3')
let a4 = document.getElementById('a4')
let loading = document.getElementById('loading')
let loading2 = document.getElementById('loading2')
let statics = document.getElementById('statics')


// Main logic
a1.style.cursor = "pointer"
a2.style.cursor = "pointer"
a3.style.cursor = "pointer"
a4.style.cursor = "pointer"


// Functions

function logoFunc() {
    logo.style.width = "290px"
    a1.style.color = "yellow"
    a2.style.color = "yellow"
    a3.style.color = "yellow"
    a4.style.color = "yellow"
    loading.style.display = "block"
    loading2.style.display = "block"
    statics.style.display = "block"
}

function renderAbout() {
    document.getElementById('about').style.display = "unset"
}

function hideAbout() {
    document.getElementById('about').style.display = "none"
}

function renderProducts() {
    document.getElementById('products').style.display = "flex"
}

function hideProducts() {
    document.getElementById('products').style.display = "none"
}

function renderMessage() {
    document.getElementById('message').style.display = "flex"
}

function hideMessage() {
    document.getElementById('message').style.display = "none"
}