let inputs = [
    document.getElementById("input1"),
    document.getElementById("input2")
];

function add() {
    let e = Object.assign(document.createElement("textarea"), {
        placeholder: "Track " + (inputs.length + 1),
        spellcheck: false,
        onclick: function() {
            this.select()
        }
    });
    inputs[inputs.length - 1].after(e);
    inputs.push(e);
}

function run() {
    let physics = "", scenery = "", powerups = "";
    inputs.forEach(i => {
        physics += (i.value.split("#")[0] || "") + (i.value.split("#")[0] ? "," : "")
        scenery += (i.value.split("#")[1] || "") + (i.value.split("#")[1] ? "," : "")
        powerups += (i.value.split("#")[2] || "") + (i.value.split("#")[2] ? "," : "")
    });
    output.value = physics.replace(/,$/g, "") + "#" + scenery.replace(/,$/g, "") + "#" + powerups.replace(/,$/g, "");
    output.select();
}

function copy() {
    output.select();
    document.execCommand('copy');
}

window.addEventListener('keydown',function(e) {
    var key = e.keyCode || e.which;
    if (key == 13) run();
    if (key == 67) copy();
});

document.addEventListener("mousedown", function(event) {
	document.documentElement.style.setProperty("--clientX", event.offsetX);
	document.documentElement.style.setProperty("--clientY", event.offsetY);
});

window.addEventListener("load",  () => void setColorScheme());
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setColorScheme);

function setColorScheme(colorScheme = window.matchMedia('(prefers-color-scheme: dark)')) {
	if (colorScheme.matches) {
		document.documentElement.classList.remove("light");
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
		document.documentElement.classList.add("light");
	}
}