const band1 = document.getElementById("band1");
const band2 = document.getElementById("band2");
const band3 = document.getElementById("band3");
const band4 = document.getElementById("band4");

const result = document.getElementById("result");
result.innerText = "1K Ohmios +/-5%";
var c1 = band1.options[band1.selectedIndex].value;
var c2 = band2.options[band2.selectedIndex].value;
var c3 = band3.options[band3.selectedIndex].value;
var c4 = band4.options[band4.selectedIndex].value;
console.log(c1, c2, c3, c4);

function band1Band2(bands)
{
	let r;
	if(bands === "black")
	{
		r = 0;
	}
	else if(bands === "brown")
	{
		r = 1;
	}
	else if(bands === "red")
	{
		r = 2;
	}
	else if(bands === "orange")
	{
		r = 3;
	}
	else if(bands === "yellow")
	{
		r = 4;
	}
	else if(bands === "green")
	{
		r = 5;
	}
	else if(bands === "blue")
	{
		r = 6;
	}
	else if(bands === "purple")
	{
		r = 7;
	}
	else if(bands === "gray")
	{
		r = 8;
	}
	else if(bands === "white")
	{
		r = 9;
	}
	
	return r;
}

function bandMult(ban3)
{
	let r;
	if(ban3 === "black")
	{
		r = 1;
	}
	else if(ban3 === "brown")
	{
		r = 10;
	}
	else if(ban3 === "red")
	{
		r = 100;
	}
	else if(ban3 === "orange")
	{
		r = 1000;
	}
	else if(ban3 === "yellow")
	{
		r = 10000;
	}
	else if(ban3 === "green")
	{
		r = 100000;
	}
	else if(ban3 === "blue")
	{
		r = 1000000;
	}
	else if(ban3 === "purple")
	{
		r = 10000000;
	}

	return r;
}

function tolerance(tol)
{
	let r;
	if(tol === "brown")
	{
		r = 1;
	}
	else if(tol === "red")
	{
		r = 2;
	}
	else
	{
		r = 5;
	}

	return r;
}

function calculate(b)
{
	let band1Color = band1.options[band1.selectedIndex].value;
	let band2Color = band2.options[band2.selectedIndex].value;
	let band3Color = band3.options[band3.selectedIndex].value;
	let band4Color = band4.options[band4.selectedIndex].value;
	let total = `${band1Band2(band1Color)}${band1Band2(band2Color)}`;
	total = parseInt(total) * bandMult(band3Color);

	let m = "";
	if(total >= 1000 && total <= 100000)
	{
		total /= 1000;
		m = "K";
	}
	else if(total >= 100000 && total <= 10000000)
	{
		total /= 100000;
		m = "M";
	}

	result.innerText = `${total}${m} Ohmios +/-${tolerance(band4Color)}%`;
}

band1.addEventListener("change", (e) => {
	calculate(e.target.value);
	band1.style.backgroundColor = e.target.value;
});

band2.addEventListener("change", (e) => {
	calculate(e.target.value);
	band2.style.backgroundColor = e.target.value;
});

band3.addEventListener("change", (e) => {
	calculate(e.target.value);
	band3.style.backgroundColor = e.target.value;
});

band4.addEventListener("change", (e) => {
	calculate(e.target.value);
	band4.style.backgroundColor = e.target.value;
});


