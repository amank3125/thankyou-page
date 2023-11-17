// create instance of kinet with custom settings
var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });
  
  // select circle element
  var circle = document.getElementById('circle');
  var body = document.getElementsByTagName('body');
  var pwImg = document.querySelector('.img-top');
  
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
let _li2 = document.querySelector('.li2');
let _li3 = document.querySelector('.li3');
let prstring = url.search.split("?")[1];
let prArr = prstring.split("&");
  if(!prstring.includes("src=hr")){
    console.log(prstring);
    _li2.innerHTML = 'Check your inbox for the Email.';
    _li3.innerHTML = 'Follow the steps in the email & start using the Admin Portal.';}
    else{
      _li2.innerHTML = 'Check your inbox for the Credentials Email.';
      _li3.innerHTML = 'Change your login Credentials and setup 2FA (Important).';
    };
    if (prArr.length === 1){
      var empName = prArr[0].replace("empName=","").replace(/%20/g," ");
      _header.innerHTML = `Thank You ${empName}!`
    } else if (prArr.length === 2 || prArr.length === 3){
      var uid = prArr[1].replace("uid=","");
      var empName = prArr[0].replace("empName=","").replace(/%20/g," ");
      _header.innerHTML = `Thank You ${empName}!`
      _uid1.innerHTML = `#${uid}`
      _uid2.innerHTML = `#${uid}`
};


// Display Viewport width and height 
// window.addEventListener('load',()=>{
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   w.innerHTML = width;
//   h.innerHTML = height;
// })

// let w = document.querySelector('.w');
// let h = document.querySelector('.h');
// window.addEventListener('resize',()=>{
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   w.innerHTML = width;
//   h.innerHTML = height;
// })