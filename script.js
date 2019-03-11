

a = document.getElementById("first-row");
b = document.getElementById("second-row");
c = document.getElementById("third-row");
d = document.getElementById("fourth-row");
e = document.getElementById("box-one");
f = document.getElementById("box-two");
g = document.getElementById("box-three");
h = document.getElementById("box-four");
i = document.getElementById("box-five");
j = document.getElementById("box-six");
k = document.getElementById("box-seven");
l = document.getElementById("box-eight");
m = document.getElementById("box-nine");
n = document.getElementById("one");
o = document.getElementById("two");
p = document.getElementById("three");
q = document.getElementById("four");
r = document.getElementById("five");
s = document.getElementById("six");
t = document.getElementById("seven");
u = document.getElementById("eight");
v = document.getElementById("nine");
w = document.getElementById("ten");
x = document.getElementById("eleven");
y = document.getElementById("twelve");
z = document.getElementById("thirteen");
aa = document.getElementById("hint");
ab = document.getElementById("unlock");
ac = document.getElementById("switch");
ad = document.getElementById("mick");
var goodSound = document.getElementById('you-win');
var badSound = document.getElementById('wrong-answer');
var nextSound = document.getElementById('next');

function nextImage(el){
	if (el.src.match("images/lamp1.png")){
		 el.src = "images/lamp2.png";
	} else if ( el.src.match("images/lamp2.png")){
		 el.src = "images/lamp3.png";
	} else if (el.src.match("images/lamp3.png")){
		 el.src = "images/lamp4.png";
	} else if (el.src.match("images/lamp4.png")){
		 el.src = "images/lamp5.png";
	} else if (el.src.match("images/lamp5.png")){
		 el.src = "images/lamp6.png";
	} else if (el.src.match("images/lamp6.png")){
		 el.src = "images/lamp7.png";
	} else if (el.src.match("images/lamp7.png")){
		 el.src = "images/lamp8.png";
	} else if (el.src.match("images/lamp8.png")){
		 el.src = "images/lamp9.png";
	} else if (el.src.match("images/lamp9.png")){
		 el.src = "images/lamp1.png";
	} else {
		// do nothing
	}
	checkLamp();
}
function nextImage2(el){
	if (el.src.match("images/up.jpg")){
		 el.src = "images/toystory.jpg";
	} else if ( el.src.match("images/toystory.jpg")){
		 el.src = "images/coco.jpg";
	} else if (el.src.match("images/coco.jpg")){
		 el.src = "images/inside.jpg";
	} else if (el.src.match("images/inside.jpg")){
		 el.src = "images/incredibles.jpg";
	} else if (el.src.match("images/incredibles.jpg")){
		 el.src = "images/brave.jpg";
	} else if (el.src.match("images/brave.jpg")){
		 el.src = "images/nemo.jpg";
	} else if (el.src.match("images/nemo.jpg")){
		 el.src = "images/cars.jpg";
	} else if (el.src.match("images/cars.jpg")){
		 el.src = "images/monster.jpg";
	} else if (el.src.match("images/monster.jpg")){
		 el.src = "images/bugs.jpg";
	} else if (el.src.match("images/bugs.jpg")){
		 el.src = "images/rat.jpg";
	} else if (el.src.match("images/rat.jpg")){
		 el.src = "images/walle.jpg";
	} else if (el.src.match("images/walle.jpg")){
		 el.src = "images/up.jpg";
	} else {
		// do nothing
	}
}
function checkMovie(el){
	if (a.src.match("toystory.jpg") && b.src.match("nemo.jpg") && c.src.match("walle.jpg") && d.src.match("incredibles.jpg")){
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		goodSound.play();
		ac.classList.add("appearance")
		ad.classList.remove("appearance")
		w.classList.add("grow");
		console.log("YOU WIN!");

	} else{
		aa.classList.remove("appearance");
		badSound.play();
	}
}
function checkLamp(){
	if (e.src.match("lamp1.png") && f.src.match("lamp2.png") && g.src.match("lamp3.png") && h.src.match("lamp4.png")&& i.src.match("lamp5.png")&& j.src.match("lamp6.png")&& k.src.match("lamp7.png")&& l.src.match("lamp8.png")&& m.src.match("lamp9.png")){
		e.classList.add("opaque");
		f.classList.add("opaque");
		g.classList.add("opaque");
		h.classList.add("opaque");
		i.classList.add("opaque");
		j.classList.add("opaque");
		k.classList.add("opaque");
		l.classList.add("opaque");
		m.classList.add("opaque");
		y.classList.add("appearance");
		nextSound.play();
		n.classList.remove("appearance");
		o.classList.remove("appearance");
		p.classList.remove("appearance");
		q.classList.remove("appearance");
		r.classList.remove("appearance");
		s.classList.remove("appearance");
		t.classList.remove("appearance");
		u.classList.remove("appearance");
		v.classList.remove("appearance");
		w.classList.remove("appearance");
		z.classList.remove("appearance");
		console.log("YOU WIN!");

	} else{
		
	}
}
function getHint(el){ 
		aa.classList.add("appearance");
		ab.classList.remove("appearance");
}
function endPage(){
	document.location.href = "https://dannyramirez1.github.io/EndAnimated/congrats.html";
}