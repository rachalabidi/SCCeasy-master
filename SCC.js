
var particles = Particles.init({
    selector: ".background",
    color: ["#C331F5", "#2535B2", "#DD2DFF"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#D80DB7", "#C331F5", "#DD2DFF"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  window.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };
//   ****************************
var typing=new Typed(".text" , {
    strings: [" "," ", "Start ", " Coding ", " Club"," "],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});