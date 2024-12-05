$(document).ready(function(){
//Skraceni naziv
let skracenImg="assets/img/";
//Nizovi
var bestSObj=[
    {src:"Zparfem4.jpg",
    name:"Armani Code W",
    price:"&#163;100.00"
    },
    {
      src:"Zparfem8.jpg",
     name:"Givenchy L'Interdit Absolu W",
     price:"&#163;150.00"
    }, 
    {
        src:"Zparfem6.jpg",
       name:"Tom Ford Leather W",
       price:"&#163;250.00"
      }, 
      {
        src:"Zparfem7.jpg",
       name:"YSL Black Opium Over Red W",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem4.jpg",
       name:"Armani Acqua Di Gio M",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem5.jpg",
       name:"Givenchy Gentleman M",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem6.jpg",
       name:"Jean Paul Gaultier Le Male M",
       price:"&#163;200.00"
      }, 
      {
        src:"Mparfem7.jpg",
       name:"Tom Ford Leather M",
       price:"&#163;280.00"
      }, 

];
var herObj=[
    {src:"Zparfem1.jpg",
    name:"Armani Acqua di Gioia W",
    price:"&#163;100.00"
    },
    {
      src:"Zparfem2.jpg",
     name:"Givenchy Ange ou Demon W",
     price:"&#163;150.00"
    }, 
    {
        src:"Zparfem3.jpg",
       name:"Tom Ford Black Orchid W",
       price:"&#163;250.00"
      }, 
      {
        src:"Zparfem4.jpg",
       name:"Armani Code W",
       price:"&#163;100.00"
      }, 
      {
        src:"Zparfem10.jpg",
       name:"JPG So Scandal W",
       price:"&#163;150.00"
      }, 
      {
        src:"Zparfem8.jpg",
       name:"Givenchy L'Interdit Absolu W",
       price:"&#163;150.00"
      }, 
      {
        src:"Zparfem12.jpg",
       name:"Narciso Rodriguez For Her W",
       price:"&#163;200.00"
      }, 
      {
        src:"Zparfem7.jpg",
       name:"YSL Black Opium OverRed W",
       price:"&#163;150.00"
      }, 

];
var himObj=[
    {src:"Mparfem2.jpg",
    name:"Tom Ford Gray Vetiver M",
    price:"&#163;250.00"
    },
    {
      src:"Mparfem3.jpg",
     name:"JPG Le Male M",
     price:"&#163;150.00"
    }, 
    {
        src:"Mparfem5.jpg",
       name:"Givenchy Gentleman M",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem7.jpg",
       name:"Tom Ford Leather M",
       price:"&#163;200.00"
      }, 
      {
        src:"Mparfem8.jpg",
       name:"YSL Y EDT M",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem9.jpg",
       name:"Armani Code M",
       price:"&#163;150.00"
      }, 
      {
        src:"Mparfem11.jpg",
       name:"Kenzo L'Eau Pour Homme M",
       price:"&#163;100.00"
      }, 
      {
        src:"mparfem12.jpg",
       name:"BOSS Bottled Triumph Elixir M",
       price:"&#163;150.00"
      }, 

];
   
//DINAMICKI ISPISANI
let navDiv=document.querySelector("#NavLinks");
var navText="";

//nav za dinamicko kreiranje
const navObj=[{
    name:"Home",
    path:"index.html"
},
{
    name:"About",
    path:"index.html#about"
},
{
    name:"Perfumes",
    path:"index.html#bests"
},
{
    name:"Contact",
    path:"index.html#contact"
},
{
    name:"Author",
    path:"author.html"
}]

//ISPISIVANJE NAVIGACIJE
for(const link of navObj){
    navText+=`<li class="nav-items">
    <a class="nav-link fw-bold mx-1 fs-5 text-white"
    href="${link.path}">${link.name}</a></li>`;
}
navDiv.innerHTML=navText;
//responsive hamburger toggle 
$(document).ready(function(){
    $("#navbtn").click(function(){
    $("#navBar").slideToggle();
    });
    });
//SLIDER slick jquery plugin
var slide=$('.thing').slick({
dots:true,
arrows:false,
autoplay:true,
autoplaySpeed:1500
});
//Read more btn show() hide()
$("#p-dodatno").hide();
var brojac=0;
$("#btnRead").click(function(e){
    e.preventDefault();
    if(brojac % 2==0){
        $("#p-dodatno").show();
        $(this).html("Show less");
    }else{
        $("#p-dodatno").hide();
        $(this).html("Read more");
    }
    brojac++;
})
//counter 
const counts=document.querySelectorAll(".count");
const speed=97
counts.forEach((counter)=>{
    function upData(){
        const target=Number(counter.getAttribute('data-bs-target'));
        const count=Number(counter.innerText);
        const inc=target/speed;
        if(count < target){
            counter.innerText=Math.floor(inc+count);
            setTimeout(upData,1)
        }else{
            counter.innerText=target;
        }       
    }
    upData()
})
//ispisivanje kartice bestsellera i hover efekat na kartice
var sellbest=document.getElementById("sellbest");
var bestText="";
for(const obj of bestSObj){
    bestText+=`<div class="col-md-3 col-sm-6 col-10 px-3 cardH">
    <img src="${skracenImg+obj.src}" alt="${obj.name}"/>
    <h4 class="fw-bold mt-3">${obj.name}</h4>
    <h5 class="fw-bold mt-3">${obj.price}</h5></div>`;
}
sellbest.innerHTML=bestText;
$(".cardH").hover(
    function () {
    $(this).addClass("hovereffekat");
    },
    function () {
    $(this).removeClass("hovereffekat");
    }
    );
//dinamicko ispisivanje for her
var herP=document.getElementById("perfHer");
var herText="";
for(const obj of herObj){
    herText+=`<div class="col-md-3 col-sm-6 col-10 px-3">
    <img src="${skracenImg+obj.src}" alt="${obj.name}"/>
    <h4 class="fw-bold mt-3">${obj.name}</h4>
    <h5 class="fw-bold mt-3">${obj.price}</h5></div>`;
}
herP.innerHTML=herText;
//dinamicko ispisivanje for him
var himP=document.getElementById("perfHim");
var himText="";
for(const obj of himObj){
    himText+=`<div class="col-md-3 col-sm-6 col-10 px-3">
    <img src="${skracenImg+obj.src}" alt="${obj.name}"/>
    <h4 class="fw-bold mt-3">${obj.name}</h4>
    <h5 class="fw-bold mt-3">${obj.price}</h5></div>`;
}
himP.innerHTML=himText;
//autoplay slider 
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:true,
  });

//OBRADA FORME
//REGEX

var reImePrezime=/^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,15}(\s[A-ZŽĆČĐŠ][a-zžćčđš]{2,15})?$/;
var rePass=/^[A-Za-z\d@$!%*?&]{8,}$/;
var reEmail=/^\w+([\.-]?\w+)*@\w+([\.-?]\w+)*(\.\w{2,3})$/;
var reAdresa=/^[a-zA-Z0-9\s,.'-]{3,}$/;
var reTel=/^(\+381\s6[0-9]\s[0-9]{3}\s[0-9]{3,4})+$/;

$("#tbImePrezime").blur(function(){
    proveraRegEx(reImePrezime,"#tbImePrezime");
})
$("#tbEmail").blur(function(){
    proveraRegEx(reEmail,"#tbEmail");
})
$("#tbBrojTelefona").blur(function(){
    proveraRegEx(reTel,"#tbBrojTelefona");
})
$("#tbAdresa").blur(function(){
    proveraRegEx(reAdresa,"#tbAdresa");
})
$("#tbPassword").blur(function(){
    proveraRegEx(rePass,"#tbPassword");
})
function proveraRegEx(regEx,element){
    if(!$(element).val().match(regEx)){
        $(element).addClass("greska");
        $(element).addClass("spanGreska");
        return false;
    }else{
        $(element).removeClass("greska");
        $(element).addClass("ok");
        return true;
    }
    
}
$("#btnPrijava").click(provera);
function provera(){
var poljeImePrezime=$("#tbImePrezime");
var poljeEmail=$("#tbEmail");
var poljebrTelefona=$("#tbBrojTelefona");
var poljeAdresa=$("#tbAdresa");
var poljeSifra=$("#tbPassword");
var lista=$("#ddlCity option:selected");


var brojGresaka=0;

if(!proveraRegEx(reImePrezime,poljeImePrezime)){
    brojGresaka++;
}
if(!proveraRegEx(reEmail,poljeEmail)){
    brojGresaka++;
}
if(!proveraRegEx(reTel,poljebrTelefona)){
    brojGresaka++;
}
if(!proveraRegEx(reAdresa,poljeAdresa)){
    brojGresaka++;
}
if(!proveraRegEx(rePass,poljeSifra)){
    brojGresaka++;
}
if(lista.val()=="0"){
    brojGresaka++;
    $("#ddlCity").addClass("greska");
}else{
    $("#ddlCity").removeClass("greska");
    $("#ddlCity").addClass("ok");
}

if(brojGresaka==0){
    $("#ispis").html("<p class='alert alert-success'>Successfull input</p>");
   $("#forma")[0].reset();
}else{
    $("#ispis").html("<p class='alert alert-danger'>Invalid form</p>");
}
}  
})