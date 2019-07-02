'use strict';
function handleFiles(obj,id) {
   	 	var file = document.getElementById("icon");
    	var files = obj.files;
    	var img = new Image();
   		if(window.URL){
        	img.src = window.URL.createObjectURL(files[0]); 
        	img.onload = function(e) {
        		window.URL.revokeObjectURL(this.src); 
        	}
   		}
   		file.src=img.src;
 }