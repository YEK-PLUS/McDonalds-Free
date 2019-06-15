$(".free").click(function(){
    this.setAttribute("class","free seleced");
    document.querySelector(".fa-bars").setAttribute("class","fa fa-arrow-left")

});
$(".button#paying").click(function(){
    document.querySelector(".pay").setAttribute("class",
        "pay c")
})
$(".pay>.button").click(function(){
    document.querySelector(".pay.c").setAttribute("class",
        "pay")
    let a ='';
    a += '<div class="time">';
    a += 'Geçerlilik';
    a += '<div><i class="far fa-clock"></i> <span m=3 s=0 >3:00</span></div>';
    a += '</div>';

    document.querySelector("#paying").innerHTML=a;
    document.querySelector("#paying").setAttribute("id","timer")
    setTimeout(function(){timer()},1000);


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;


    var months = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

mm = months[mm - 1];
console.log(dd,mm)
$("#d").text(dd);
$("#m").text(mm);
$(".date-img").attr("class","date-img s")
});
function timer(){
	let obj = document.querySelector("#timer .time span");
	let min = obj.getAttribute("m")
	let sec = obj.getAttribute("s")

	if(sec == 0){
		min = ((min>0)?min-1:0)
		sec += 60;
	}
	else{
		sec -=1;
	}

	obj.setAttribute("m",min)
	obj.setAttribute("s",sec)

	displaySec=((sec < 10 )?"0"+sec:sec)

	obj.innerText = min+":"+displaySec;

	setTimeout(function(){timer()},1000);
}
