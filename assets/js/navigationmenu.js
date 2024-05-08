$(function(){
    var prevScrollY = window.pageYOffset;
    const handleNavScroll = () => {
      let scrollY = window.pageYOffset;
 
      $('#content').children("*[id]").each((index, ref) => {
         
         const sectionHeight = ref.offsetHeight;
         const sectionTop = ref.offsetTop;
        
         if (
            scrollY > sectionTop  &&
            scrollY <= sectionTop + sectionHeight 
         ) {
             
            $('#navigation-bar').children().children().removeClass('active');
            $('#navigation-bar').children().children().eq(index).addClass('active');
             
         } 
        })
        
        prevScrollY = scrollY;
    }
    document.addEventListener('scroll', handleNavScroll);
})

var winSize = window.matchMedia("(min-width:768px)");
winSize.addListener(displayfun);
function displayfun(winSize) {
if (winSize.matches) {
$('nav[id^="navbar-item"]').show();
	$('section[id^="navcol"]').hide();
}
}

