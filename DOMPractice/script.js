const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const p = document.createElement("p");
p.classList.add("p");
p.textContent = "Hey!! I'm Red!!";
p.style.color = "red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!!!";
container.appendChild(h3);

const div = document.createElement("div");
div.style.background = "pink";
div.style.border ="solid black";

const h1 = document.createElement("h1");
h1.style.color = "blue";
h1.textContent = "I'm in a Div!!!";


const p1 = document.createElement("p");
p1.textContent = "Me too!!";

div.append(h1);
div.append(p1);
container.appendChild(div);

const button = document.createElement("button");
button.style.color = "blue";
// button.id = "6";
button.textContent = "I'm in a Div!!!";
container.appendChild(button);

function alertFunction() {
	alert("YAY! YOU DID IT!");
}
// const btn = document.querySelector("#btn");

// // METHOD 2
// btn.onclick = alertFunction;

// // METHOD 3
// btn.addEventListener("click", alertFunction);

// btn.addEventListener("click", function (e) {
// 	e.target.style.background = "blue";
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
console.log(buttons); 
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
	button.addEventListener("click", () => {
		alert("YAY! YOU DID IT!");
	});
});
