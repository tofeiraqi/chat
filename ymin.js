$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw = $(".pmsgc").length;if(usmsgw > 0){
   $(`
    <div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;">
      <img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url();" class="fl fitimg hand u-pic    ">
      <div class="uzr fl" style="padding:0px;width:80%">
        <div style="padding:0px;width:100%;" class="fl">
          <img class="fl u-ico" alt="" src="sico/"1614323486809.gif

">
          <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand">‎.!   الادارة العامة</span>
        </div>
        <br>
        <div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl">
        <div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl">  في شات بنت اليمن للجوال مرحباً بك 👋 <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> نقدّر تواجدك                                .شُـُـُُـُآتـٌـٌٌـ تـٌـٌٌـآجـ,ـ                                                                                                                               لُـِـِِـِِِـِِـِـلُـِـِِـِِِـِِـِـجـ,ـوُآلُـِـِِـِِِـِِـِـ
ولكم نورتو شات بنت اليمن  😘 
 معنا، ونتمنى لك يوماً سعيداً إن شاء الله </div>
      </div>
    </div></div>
`).appendTo('div#d2')
clearInterval(myVar);

}else{console.log(usmsgw)} }, 2000);
})

$(`<img src="" class="fr" style="width:100%;margin-top: 1px;">
<a href="" style="border-radius: 3px 12px 11px 11px;width:110px;margin:3px;" class="fl mini  fa fa-star-half-o btn btn-info">الإشتراكات</a>
<a href="" style="border-radius: 3px 12px 11px 11px;width:110px;margin:3px;" class="fl mini fa fa-bell btn btn-danger">القوانيـن</a>  
<a href="" style="border-radius: 3px 12px 11px 11px;width:110px;margin:3px;" class="fl mini  fa fa-heartbeat btn btn-info">التطبيـق</a>
`).insertBefore('.nav-tabs');
$("[data-target=#wall]").attr('title; كل عام وانتم بخير ')
$('<img src="" style="width:85px;margin-top:-65px; " class="fr">').insertBefore('.loginstat');
$("<br>").insertBefore('.checkbox');
$('.nav-tabs').addClass('fl').css('width','100%');
if(location.protocol!='https:'){location.protocol='https:';}
$(`<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera">
<link rel="stylesheet" href="https://rawcdn.githack.com/tofeiraqi/chat/7eaee1c091a3946f3494594c310c46f3eb038bff/ymin.css">
</style>`).insertBefore('body');
$(".fl.ustat").css("width", "12px") 
$(".fl.ustat").css("height", "12px") 
$(".fl.ustat").css("border-radius", "12px") 
$(".fl.ustat").css("position", "static") 
$(".fl.ustat").css("margin-top", "10px") 
$(".fl.ustat").css("margin-left", "0px")

$(`<center><div><div width="99.5%" style="background-image:url(https://#);color: #000000;border-radius: 5px 5px 5px5px;border-bottom: 2px solid #ffffff;border-top: 2px solid#ffffff;padding-bottom: 2px!important;" ><font style="background-color: #35BDB4;border-radius: 1px 9px 9px 9px;width:87px;margin:2px;font-family: 'Helvetica',FontAwesome;padding: 2px 10px 2px 10px;margin: 7px 10px 7px 10"<";    >اهلاً وسهلاً بكم في شات بنت اليمن دمتم ب خير </div></div><center>`).insertBefore('#d2');



$(".btn .btn-primary" ).css( "border-radius", " 0px 25px 0px 25px");
(document.getElementById("tbox").placeholder = " من فضلك  آكتب رسـالتك هنــــا");
													}
														catch (e){
															console.log(e)
														}
												</script>
												<script>
													function saveColor(){
														var dfsdfsdf = $('.label-primary, .btn-primary').css('background-color');
														console.log(dfsdfsdf)
														var colorLo = {bgcolor:$('.bgcolor').val(),btcolor:$('.btcolor').val(),bocolor:$('.bocolor').val(),hicolor:$('.hicolor').val()}
														localStorage.setItem('colorLo', JSON.stringify(colorLo));
														getLoColor(JSON.stringify(colorLo))
														$('.divColorLo').slideToggle();
													}
													var hexDigits = new Array
													("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
													function rgb2hex(rgb) {
														rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
														return  hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
													}
													function hex(x) {
														return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
													}
													function getLoColor(c){
														var lo = localStorage.getItem('colorLo')||c;
														if(lo){
															var stLoc = localStorage.getItem('colorSt');
															var loJs = JSON.parse(lo)
															for(var i in loJs){
																$('.'+i).val(loJs[i]);
																switch(i){
																	case 'bgcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.bg').css('background-color'))
																		break;
																	case 'btcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.label-primary, .btn-primary').css('background-color'))
																		break;
																	case 'bocolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.border').css('border-color'))
																		break;
																	case 'hicolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.light').css('background-color'))
																		break;
																}
															}
															var aa = '<style class="colorLo">.border{border-color: #'+loJs.bocolor+'!important;} .primaryborder{border-color: #'+loJs.btcolor+'!important;} .label-primary, .btn-primary {background-color: #'+loJs.btcolor+'!important;} .light{background-color: #'+loJs.hicolor+'!important;} .bg{background-color: #'+loJs.bgcolor+';}</style>';
															if(stLoc && !c)aa = stLoc;
															localStorage.setItem('colorSt', aa);
															var loHtml = $('.colorLo')
															if(loHtml.length >0)loHtml.text($(aa).text());
															else $('head').append(aa);
														}else{
															$('.colorLo').remove();
															$('.bgcolor,.btcolor,.hicolor,.bocolor').val('000000');
															$('.bgcolor,.btcolor,.hicolor,.bocolor').css('background-color','#000000');
														}
													}
													getLoColor()
													$('.ssss').click(function(e){
														e.stopPropagation();
														$('.divColorLo').slideToggle();
