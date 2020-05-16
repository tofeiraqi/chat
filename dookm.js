$('.dpnl').append(` <div id="mic" style="height: 100%;width:100%;" class="break light tab-pane border"> 
<center><iframe src="https://mixlr.com/users/8337295/embed/?autoplay=true" width="100%" height="150px" scrolling="no" frameborder="no" marginheight="0" marginwidth="0"></iframe></center>
<center></center></center>
</div>`);
$('#d0').append(`<label title="الإذاعه" href="#" onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#mic').scrollTop(0);},100);$('.dpnl').show();"
data-toggle="tab" data-target="#mic"  class="ae fa label label-primary fa-microphone ">الاذاعه</label>`);
