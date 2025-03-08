
var testbtn = document.getElementById("run")
var list = ["可口可乐*6", "百事可乐*6",	"雪碧*6", "薯片*2", "奥利奥*2"]
var root = document.querySelector(".root")

function getRandomInt(min, max) {
    min = Math.ceil(min); // 向上取整
    max = Math.floor(max); // 向下取整
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updatePage() {
	var height = 0
	for(var i = 0; i < root.children.length; i++) {
			console.log(root.children[i].clientHeight)
			height = height + root.children[i].clientHeight
		}
	console.log(height)
	root.style.height = height.toString() + 'px'
}
updatePage()
testbtn.addEventListener('click', ()=>{
	if (document.querySelector("#show") === null) {
		var show = document.createElement('h1')
		show.id = "show"
		show.innerText = list[getRandomInt(0, list.length-1)]
		root.appendChild(show)
	}
	else {
		document.querySelector("#show").innerHTML = list[getRandomInt(0, list.length-1)]
	}
	console.log(root.children)
	updatePage()
})