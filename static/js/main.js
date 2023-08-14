(function(){
  console.log('abcdefg')
  var sidebarEle = document.getElementById('sidebar-top') || '';
  if(sidebarEle){
    $(window).scroll(function(){
      let s = $(this).scrollTop();
      let t = $('#sidebar-top').offset().top;
      if(s > t - 90){
        $('#sidebar').css({position:'fixed',top: '100px',width: '300px'});
      }else{
        $('#sidebar').css({position: '',top: 0});
      }
    })
    $('#sidebar li a').on('click', function(){
      var offsetH = 0;
      var a = $(this).attr('href');
      offsetH = $(a).offset().top;
      $("body,html").stop().animate({ scrollTop: offsetH - 100 });
    })
  }

})()