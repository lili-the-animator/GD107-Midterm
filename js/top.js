// JavaScript Document
//Click event: scrolls page back to top
let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
	document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth",
	})
})