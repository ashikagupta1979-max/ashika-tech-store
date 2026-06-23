let cart = 0;

function addToCart(){
cart++;

document.getElementById("cartCount").innerText = cart;
}

if('serviceWorker' in navigator){

window.addEventListener('load',()=>{

navigator.serviceWorker.register('service-worker.js')
.then(()=>{
console.log("Service Worker Registered");
});

});

}