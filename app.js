// create instance of kinet with custom settings
var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });
  
  // select circle element
  var circle = document.getElementById('circle');
  var body = document.getElementsByTagName('body');
  
  // set handler on kinet tick event
  kinet.on('tick', function(instances) {
    circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
  });
  
  // call kinet animate method on mousemove
  document.addEventListener('mousemove', function (event) {
    circle.style.visibility = 'visible';
    // body.style.curser = 'none';
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
  });

console.clear();
const url = window.location;
let _header = document.querySelector('.header');
let _uid1 = document.querySelector('.uid1');
let _uid2 = document.querySelector('.uid2');
let prstring = url.search.split("?")[1];
let prArr = prstring.split("&")
let empName = prArr[0].replace("empName=","").replace(/%20/g," ");
let uid = prArr[1].replace("uid=","");
_header.innerHTML = `Thank You ${empName}!`
_uid1.innerHTML = `#${uid}`
_uid2.innerHTML = `#${uid}`