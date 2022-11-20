const api_url = 
      "https://demo2965432.mockable.io/highon/colors";

async function getapi(url) {

const response = await fetch(url);

var data = await response.json();
    console.log(data);
    console.log(data.data[0]);
    console.log(data.data[0].code);
    show(data);
}

getapi(api_url);
let but1 =document.getElementById("but1");
let but2 =document.getElementById("but2");
let but3 =document.getElementById("but3");
let but4 =document.getElementById("but4");
let but5 =document.getElementById("but5");

function show(data) {
    let tab = `<div class="">Select a color</div>
    <div class="colors">
        <button class="button" id="but1">${data.data[0].name}</button>
        <button class="button button2" id="but2">${data.data[1].name}</button>
        <button class="button button3" id="but3">${data.data[2].name}</button>
        <button class="button button4" id="but4">${data.data[3].name}</button>
        <button class="button button5" id="but5">${data.data[4].name}</button>
    </div>  
    `;
    but1.addEventListener('onclick',function(ev){
        console.log(ev);
    })
        // for (let r of data.data){
        // //     tab+=`<div class="">Select a color</div>
        // //     <div class="colors">
        // //         <button class="button">Bronze</button>
        // //         <button class="button button2">Lilac</button>
        // //         <button class="button button3">Yellow</button>
        // //         <button class="button button4"></button>
        // //         <button class="button button5">Black</button>
        // //     </div>
        // //     <div>
        // //         <div>Give Title</div>
        // //         <input type="text" name="title" id="title">
        // //     </div>
        // //     <div>
        // //         <div>Description</div>
        // //         <input type="text" name="description" id="description" >
        // //     </div>
        // // `;
        // }

    document.getElementById("colorChoices").innerHTML = tab;
}