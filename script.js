const theform=document.getElementById("form1");
const theinput=document.getElementById("user-input");
const body1=document.getElementById("the-body");

const storage=JSON.parse(localStorage.getItem("things-in-storage")) || [];

if (storage.length > 0) {
    updateh2(storage[storage.length-1]);
}



theform.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if (theinput.value.trim()==="") return;

    storage.push(theinput.value);
    localStorage.setItem("things-in-storage",JSON.stringify(storage));
    updateh2(theinput.value);
    theinput.value="";
});

function updateh2(text){ 
    let h2 = document.getElementById("theh2");

    if (!h2){
    h2=document.createElement("h2");
    body1.appendChild(h2);
    h2.id="theh2";}

    h2.textContent= text;

};