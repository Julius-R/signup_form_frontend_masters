import confirm from "./utils";

const btn = document.querySelector(".btn");
let section = document.querySelectorAll(".form-area input");

const checkInput = arr => {
	let emptyVal = [];
	arr.forEach(x =>
		x.value == "" ? emptyVal.push(x) : x.parentNode.classList.remove("err")
	);
	emptyVal.forEach(c => c.parentNode.classList.add("err"));
	if (emptyVal.length <= 0)
		alert(`${arr[0].value}, thanks for submitting your form!`);
};

btn.addEventListener("click", function() {
	checkInput(section);
});
