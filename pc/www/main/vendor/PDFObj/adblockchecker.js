(function(){function insertBlockedAdNotice(el){var aside=document.createElement("aside");aside.className="blocked-ad";aside.innerHTML="<p><b>Advertisement blocked.</b> I completely understand, ads tend to reduce the quality of the browsing experience. Please note PDFObject is a free open-source project, created by <a href='http://itgotmethinking.com'>an individual</a>, not a company. These ads are the only funding source, and help pay for hosting and development costs.</p>";el.parentNode.insertBefore(aside,el)}function insertPlaceholders(){var ad_containers=document.querySelectorAll(".adspace");for(var i=0;i<ad_containers.length;i++){insertBlockedAdNotice(ad_containers[i])}}window.setTimeout(function(){if(document.querySelector(".adspace").offsetHeight===0){insertPlaceholders()}},100)})();