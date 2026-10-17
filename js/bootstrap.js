(function(){
 const overlay=document.getElementById('introOverlay');
 const video=document.getElementById('introVideo');
 let finished=false;
 function startup(){
   try {
     const p=sessionStorage.getItem('innovSession15');
     const users=JSON.parse(localStorage.getItem('innovUsers15')||'{}');
     if(p && /^01\d{9}$/.test(p) && users[p] && users[p].phone===p){enter(users[p]);return;}
     sessionStorage.removeItem('innovSession15');
   } catch(e){console.warn('Pilot session unavailable',e)}
   document.getElementById('auth').classList.remove('hide');
   document.getElementById('app').classList.add('hide');
   document.getElementById('logout').style.display='none';
 }
 function finish(){if(finished)return;finished=true;clearTimeout(watchdog);overlay.style.display='none';document.body.classList.remove('intro-active');try{video.pause()}catch(e){};startup();}
 document.body.classList.add('intro-active');
 // Explicitly hide both until the intro ends; no application access before pilot entry.
 document.getElementById('auth').classList.add('hide');
 document.getElementById('app').classList.add('hide');
 document.getElementById('skipIntro').addEventListener('click',finish);
 video.addEventListener('ended',finish);
 video.addEventListener('error',finish);
 const watchdog=setTimeout(finish,window.INNOVAL_CONFIG.introMaxMs||12000);
 if(!window.INNOVAL_CONFIG.introEnabled){finish();return;}
 const promise=video.play();if(promise&&promise.catch)promise.catch(()=>{ /* User can tap Skip if autoplay is blocked */ });
})();
