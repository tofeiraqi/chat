$("div#tlogins button.btn.btn-primary").click(function(){
var myVar = setInterval(function(){ var usmsgw = $(".pmsgc").length;if(usmsgw > 0){
   $(`
    <div class="uzr fl corner borderg mm" style="border-radius:5px;margin-bottom:-2px;width:99.5%;padding:0px; background-color:white;">
      <img style="width: 36px; height: 38px; margin-left: 1px; margin-top: 1px; background-image: url();" class="fl fitimg hand u-pic    ">
      <div class="uzr fl" style="padding:0px;width:80%">
        <div style="padding:0px;width:100%;" class="fl">
          <img class="fl u-ico" alt="" src="sico/"1549115485356.gif">
          <span style="padding: 1px 8px; margin-top: 2px; display: block; max-width: 82%; border-radius: 3px; color: rgb(199, 103, 48);" class="corner nosel u-topic dots fl hand">‎.!   Dook Mobile  </span>
        </div>
        <br>
        <div style="padding: 0px; width: 100%; color: rgb(60, 0, 255);" class=" u-msg   break  fl">
        <div style="padding: 0px;width: 100%;color: rgb(60, 0, 255);text-align: left;display: block;margin-top: -17px;" class=" u-msg   break  fl"> مرحباً بك 👋 <h1 style="display: inline-block;color: red;">`+ getuser(myid).topic+ `</h1> نقدّر تواجدك معنا، ونتمنى لك يوماً سعيداً إن شاء الله </div>
      </div>
    </div></div>
`).appendTo('div#d2')
clearInterval(myVar);

}else{console.log(usmsgw)} }, 2000);
})

$('.dpnl').append(` <div id="mic" style="height: 100%;width:100%;" class="break light tab-pane border"> 
<center><iframe src="https://mixlr.com/users/8337295/embed/?autoplay=true" width="100%" height="150px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe></center>
<center></center></center>
</div>`);
$('#d0').append(`<label title="الإذاعه" href="#" onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#mic').scrollTop(0);},100);$('.dpnl').show();"
data-toggle="tab" data-target="#mic"  class="ae fa label label-primary fa-microphone ">الاذاعه</label>`);
