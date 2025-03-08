var testbtn = document.getElementById("run")
var list = ["可口可乐*6", "百事可乐*6",	"雪碧*6", "薯片*2", "奥利奥*2", "可口可乐*6", "百事可乐*6", "奥利奥*2", "奥利奥*2", "奥利奥*2","魔芋爽一盒"]
var Outcome = []
var root = document.querySelector(".root")
var state = 0
localStorage.setItem("count", 0)
localStorage.setItem("outcome", JSON.stringify([]))
if (localStorage.getItem("state") == null) {
	localStorage.setItem("state", 0)
}
else {
	state = localStorage.getItem("state")
}
localStorage.setItem("state", state)
if (localStorage.getItem("count") == null) {
	var count = 0
	localStorage.setItem("count", count)
	localStorage.setItem("outcome", Outcome)
}
else {
	var count = localStorage.getItem("count")
}
var storedOutcome = localStorage.getItem("outcome");
if (storedOutcome) {
    try {
        Outcome = JSON.parse(storedOutcome);
    } catch (e) {
        console.error("Error parsing stored outcome:", e);
        Outcome = [];
    }
} else {
    Outcome = [];
    localStorage.setItem("outcome", JSON.stringify(Outcome));
}
// document.cookie = `count:${count}`

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
	console.log(localStorage.getItem("count"))
	console.log(localStorage.getItem("outcome"))
	localStorage.setItem("count", count)
	var showvar = list[getRandomInt(0, list.length-1)]
	if(count < 3) {
		if (document.querySelector(".show") === null) {
			var show = document.createElement('h1')
			show.className = "show"
			Outcome.push(showvar)
			show.innerText = showvar
			root.appendChild(show)
		}
		else {
			var show = document.createElement('h1')
			show.className = "show"
			Outcome.push(showvar)
			show.innerText = showvar
			root.appendChild(show)
		}
		console.log(root.children)
		updatePage()
		count++
	}
	else {
		state = 1
		localStorage.setItem("state", 1)
		if (document.querySelectorAll(".show").length <= 0 & state==1) {
			for(var i = 0; i <= Outcome.length-1; i++) {
				var show = document.createElement('h1')
				show.className = "show"
				show.innerText = Outcome[i]
				root.appendChild(show)
			}
		}
		else {
			var show_items = document.querySelectorAll(".show")
			for(var i=0; i <= show_items.length-1; i++) {
				console.log(show_items[i])
				show_items[i].remove()
			}
			for(var i = 0; i <= Outcome.length-1; i++) {
				var show = document.createElement('h1')
				show.className = "show"
				show.innerText = Outcome[i]
				root.appendChild(show)
			}
			updatePage()
		}
	}
	localStorage.setItem("outcome", JSON.stringify(Outcome))
})