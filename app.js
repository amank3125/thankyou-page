// create instance of kinet with custom settings
var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });
  
  // select circle element
  var circle = document.getElementById('circle');
  var body = document.getElementsByTagName('body');
  var pwImg = document.querySelectorAll('.img-top');
  
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
let _uidContainers = document.querySelectorAll('.uid-container');
let _uid1 = document.querySelector('.uid1');
let _uid2 = document.querySelector('.uid2');
let _lis = document.querySelectorAll('.li');
let _li1 = document.querySelector('.li1');
let _li2 = document.querySelector('.li2');
let _li3 = document.querySelector('.li3');
let prstring = url.search.split("?")[1];
let prArr = prstring.split("&");
let _trackUID = "";
let _mailSrch = "https://mail.google.com/mail/u/0/#search/from%3Adont-reply%40pw.live+subject%3A";
  if(prstring.includes("src=GIDC")){  // If Source is HR
    console.log('src = 1');                     // If Source is not HR or not given
    _li2.innerHTML = `Check your Inbox for an email with credentials <a href="${_mailSrch}GIDC" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>`;
    _li3.innerHTML = 'Change your login Credentials and setup 2FA (Important).';
    _trackUID = 'https://pw.jotform.com/inbox/232893220066050/?search=';
    //------------------

  } else if (prstring.includes("src=xidc")){ // If Source is XIDC (Xylem)
    _li1.innerHTML = 'Have a cup of tea or coffee ☕';
    _li2.innerHTML = `Wait for us to send you the credentials <a href="${_mailSrch}XIDC" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>`;
    _li3.innerHTML = 'Change your login Credentials and setup 2FA (Important).';
    _trackUID = 'https://pw.jotform.com/inbox/240032361807952/?search=';
    pwImg.forEach(function(img){
      img.src = './img/xylem_logo.png';
      img.style = 'width : 30%; height:8%; border-radius:0px; margin-top:0;';
      if(screen.width<=480){
        img.style = 'width:30vw;height:4vh; border-radius:0px; margin-top:0;';
      }else {
        return;
      };
    });
    _lis.forEach(function(li){
      li.style = "background-image:linear-gradient(120deg,#0e415d,#051d29);";
    })
    _uidContainers.forEach(function(uidC){
      uidC.style = "background-image:linear-gradient(220deg,#0e415d,#051d29);";
    })
  }
    else {        
      _li2.innerHTML = `Check your Inbox for an email with credentials <a href="${_mailSrch}AIC" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>`;  // Hyperlinked to email inbox  
      // _li2.innerHTML = 'Check your inbox for the Email.';  @Non Hyper
      _li3.innerHTML = 'Follow the steps in the email & start using the Admin Portal.';
      _trackUID = 'https://pw.jotform.com/inbox/232563009192958/?search=';
    };
    if (prArr.length === 1){
      var empName = prArr[0].replace("empName=","").replace(/%20/g," ");
      _header.innerHTML = `Thank You ${empName}!`
    } else if (prArr.length === 2 || prArr.length === 3){
      var uid = prArr[1].replace("uid=","");
      var empName = prArr[0].replace("empName=","").replace(/%20/g," ");
      _header.innerHTML = `Thank You ${empName}!`
      _uid1.innerHTML = `${uid}<a href="${_trackUID}${uid}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>`;
      _uid2.innerHTML = `${uid}<a href="${_trackUID}${uid}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>`;
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