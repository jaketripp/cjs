// https://en.wikipedia.org
// Redirect Wikipedia sites to the mobile version for better readability
var url = window.location.href;
window.location = url.slice(0,11) + "m." + url.slice(11);

// https://prep.hackreactor.com
// loved this free course to sharpen my JS skills but on my small laptop screen, the UI was TERRIBLE
// this script removes the unnecessary sidebar and let me focus better
// hack reactor fix UI
setInterval(function(){
  document.querySelector('#courseSidebar').style.width = '0';
  document.querySelector('div.course-progress.lecture-page.sticky').style.display = 'none';
  document.querySelector('div.course-mainbar.lecture-content').style.width = '100%';
  document.querySelector('div.course-mainbar.lecture-content').style.marginLeft = '0';
}, 2000);

// Auto-close out of new tabs opened by spammy sites
// Note: doesn't work perfect for new tabs that redirect, but works pretty good otherwise
var prev = document.referrer;
var reg = /partOfYourWebsiteGoesHere/g;
// i.e. your website is https://spammymovies.com
// var reg = /spammymovies/g;
if (!reg.test(window.location)){
  if (reg.test(prev)){
    window.close();
  }
}



// *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
// use at your own discretion
// these were discovered purely out of curiosity while learning CSS
// I bear no responsibility/liability/accountability for anything or anyone using these
// these are listed purely for educational purposes
// *=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

// https://www.businessinsider.com/
// get past BusinessInsider's paywall

// use a setTimeout so that it doesn't run too soon
setTimeout(function() {
  $("body").removeClass("tp-modal-open");
  $(".tp-backdrop").removeClass("tp-backdrop");
  $(".tp-active").removeClass("tp-active");
  $(".tp-modal").css("display", "none");
}, 2000);

// https://cooking.nytimes.com/
// get past NY Time's signup wall
setInterval(function(){
  document.querySelector('.nytc---shared---modalContentContainer.nytc---largepicturemodal---modalContentContainer.isHard').style.display = 'none';
  document.querySelector('.nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG').style.backgroundColor = 'transparent';
  document.querySelector('.nytc---modal-window---windowContainer.nytc---modal-window---isShown.nytc---shared---blackBG').style.height = '0px';
  var noScrolls = document.querySelectorAll('.nytc---modal-window---noScroll');
  for (var i = 0; i < noScrolls.length; i++){
    noScrolls[i].style.overflow = 'visible';
  }
}, 2000)
