let ab = document.getElementById("par");
let bot = document.getElementById("bot");
let up = document.getElementById("up");
let lvl = document.getElementById("level");
const body = document.getElementsByTagName("body")[0];
let a = 0;
let upgs = 1;
let preco1 = 50;
let level = 0;
let at = 0;

bot.addEventListener("click", () => {
	ab.innerText = a + upgs + " g";
	a += upgs;
})
up.addEventListener("click", () => {
	if (a >= preco1){
		upgs++;
		a -= preco1;
		ab.innerText = a + " g";
		preco1 += 50;
		up.innerText = preco1 + " g";
		level++;
		lvl.innerText = "level " + level;
		if (level == 5 && at == 0){
			let auto = document.createElement('button');
			auto.textContent = "Auto criquer: 1000 g";
			auto.id = "criquer";
			body.appendChild(auto);
		}
	}
	else {
		window.alert("POBRE!");
	}
	let auto = document.getElementById("criquer");
	if (auto) {
	auto.addEventListener("click", () => {
		if (a >= 1000){
			a -= 1000
			setTimeout(() => {
				ab.innerText = ++a;
			}, 2000);
		}
		else {
			window.alert("POBRE!");
		}
	})
	}
})
