(()=>{"use strict";const e=document.getElementById("sliderWrapper");e.style.cssText="display:flex; flex-wrap: wrap;",function(e,t){for(let i=0;i<t.length;i++){const s=document.createElement("div");s.setAttribute("class","slide"),s.setAttribute("id","slide"+i),s.style.display="inline-block";const g=document.createElement("img");g.src=t[i].img,g.style.cssText="width:300px;",s.appendChild(g),e.appendChild(s)}}(e,[{img:"img/image1.jpg"},{img:"img/image2.jpg"},{img:"img/image3.jpg"},{img:"img/image4.jpg"}])})();