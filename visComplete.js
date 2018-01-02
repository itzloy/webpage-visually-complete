(function(){window.CPVisuallyComplete=function(){var n,t,i;return function(n){n[n.OnUserinteracted=0]="OnUserinteracted";n[n.OnTimeOut=1]="OnTimeOut"}(n||(n={})),t=function(){function t(){var t=this;this.pageWindow=parent.window||window;this.windowEvent=this.pageWindow.WindowEvent;this.protocol=location.protocol+"//";this.resourceBasedVisuallyComplete=0;this.domChanges=[];this.total=0;this.visuallyCompleteTimeOut=2e3;this.pageLoadPercentage=90;this.isObserverAvailable=!1;this.mutationElements=[];this.initiatorType=["img","iframe","css","script","subdocument"];this.onLoad=function(){var i=function(){t.isObserverAvailable&&t.disconnect(n.OnUserinteracted);t.pageWindow.document.removeEventListener("scroll",i);t.pageWindow.document.removeEventListener("click",i)};t.pageWindow.document.addEventListener("scroll",i);t.pageWindow.document.addEventListener("click",i)};this.initWindowEvents();this.pageWindow.addEventListener("load",this.onLoad)}return t.prototype.init=function(){this.initElWatcher();this.initElVisible();this.start()},t.prototype.handleNodeAdded=function(n){this.intersectionObs.observe(n)},t.prototype.start=function(){for(var t=this,n=0;n<this.mutationElements.length;n++)this.intersectionObs.observe(this.mutationElements[n]);this.mutationElements.forEach(function(n){return t.mutationObs.observe(n,{subtree:!0,childList:!0})})},t.prototype.disconnect=function(i){var s=performance.timing.domComplete-performance.timing.navigationStart,o,f,u,e,r;if(!t.apiBasedVisuallyComplete&&i==n.OnUserinteracted&&this.intersectionObs){this.intersectionObs.disconnect();this.userInteracted=!0;return}if(!this.userInteracted&&this.intersectionObs)for(this.intersectionObs.disconnect(),o=this.pageWindow.performance.timing.navigationStart,f=0,u=0,e=this.domChanges;u<e.length;u++)r=e[u],f+=r.area,r.percentChange=100*f/this.total,r.percentChange>this.pageLoadPercentage&&(t.apiBasedVisuallyComplete=Math.round(r.timeStamp-o))},t.prototype.initElWatcher=function(){var n=this;this.currentElements=this.pageWindow.document.body.getElementsByTagName("*");this.filter();this.mutationObs=new window.MutationObserver(function(i){n.userInteracted||t.apiBasedVisuallyComplete||i.forEach(function(t){for(var u,f=t.addedNodes,i=0,r=f;i<r.length;i++){u=r[i];try{return n.handleNodeAdded(u)}catch(e){return null}}})})},t.prototype.initElVisible=function(){var n=this;this.intersectionObs=new window.IntersectionObserver(function(t){t.forEach(function(t){return n.handleVisChange(t)})},{threshold:[0,.25,.5,1]})},t.prototype.handleVisChange=function(n){var t={};t.timeStamp=Date.now();t.target=n.target;t.ratio=n.intersectionRatio;t.time=n.time;t.area=n.intersectionRect.height*n.intersectionRect.width;this.total+=t.area;this.domChanges.push(t)},t.prototype.filter=function(){for(var t,n=0;n<this.currentElements.length;n++)t=this.currentElements[n],t.tagName!="BR"&&this.mutationElements.push(t)},t.prototype.initWindowEvents=function(){var i=this,r=function(){setTimeout(function(){i.isObserverAvailable?i.disconnect(n.OnTimeOut):i.pageWindow.performance&&i.getImages()},i.visuallyCompleteTimeOut)};this.pageWindow.document.readyState=="complete"?r():this.pageWindow.addEventListener("load",r);this.pageWindow.onresize=function(){!t.apiBasedVisuallyComplete&&i.intersectionObs&&(i.intersectionObs.disconnect(),i.userInteracted=!0)}},t.prototype.getValue=function(){return t.apiBasedVisuallyComplete},t.prototype.getImages=function(){for(var r,n,f=this.pageWindow.performance.getEntriesByType("resource"),i=0,u=f;i<u.length;i++)r=u[i],this.initiatorType.indexOf(r.initiatorType)>-1&&(n=r.responseEnd,(!this.resourceBasedVisuallyComplete||n>this.resourceBasedVisuallyComplete)&&(this.resourceBasedVisuallyComplete=Math.round(n),t.apiBasedVisuallyComplete=Math.round(n)))},t}(),i=new t,{getValue:i.getValue}}();})(); 