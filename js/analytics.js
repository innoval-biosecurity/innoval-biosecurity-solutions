(function(){
 const c=window.INNOVAL_CONFIG;
 if(!c.analyticsEnabled || !/^G-[A-Z0-9]+$/.test(c.ga4MeasurementId)) {window.innovalTrack=()=>{};return;}
 window.dataLayer=window.dataLayer||[];
 window.gtag=function(){window.dataLayer.push(arguments)};
 window.gtag('js',new Date());
 window.gtag('config',c.ga4MeasurementId,{send_page_view:true,allow_google_signals:false});
 const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(c.ga4MeasurementId);document.head.appendChild(s);
 window.innovalTrack=(event)=>{if(/^[a-z][a-z0-9_]{1,39}$/.test(event))window.gtag('event',event)};
})();
