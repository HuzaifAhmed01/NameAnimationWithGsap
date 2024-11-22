
    
let h1 = document.querySelector('#main h1');
let letterString = h1.textContent;
let brockedh1= letterString.split("");
console.log(brockedh1)
let clutter='';
brockedh1.forEach((elem)=>{
  clutter=clutter+`<span>${elem}</span>`;
})
// console.log(clutter)
h1.innerHTML=clutter;
  gsap.from('h1 span',{
    opacity:0,
    y:100,
      duration:1,
      stagger:.1,
  })





