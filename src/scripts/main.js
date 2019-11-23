var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  bullets: '.bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true,
  forms: true
});

document.addEventListener('keydown', function(e) {
	if(e.which == 36) {// HOME
		location.href= "#1";
	}
	else if(e.which == 35){ // END
		var jlhSection = document.querySelectorAll("section").length;
		location.href= "#"+jlhSection;
	}
});

window.onload = function()
{
    //adding the event listerner for Mozilla
    if(window.addEventListener)
        document.addEventListener('DOMMouseScroll', moveObject, false);
 
    //for IE/OPERA etc
    document.onmousewheel = moveObject;
}

var lastScroll = 0;
var delta = 0;
var count = 0;
function moveObject(event)
{
    if (!event) event = window.event;
    delta = event.wheelDelta;
    if (delta>lastScroll) {
      count=0;
      deck.prev();
      // alert("atas"+ delta +" " + lastScroll);
    } else {
      count++;
      deck.next();
      lastScroll = delta;
      // alert("bawah"+ delta +" " + lastScroll);
    }
    if(count>1){
      lastScroll = 0;
    }

}