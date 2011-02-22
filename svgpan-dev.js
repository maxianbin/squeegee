/*************************************************************
 **  svgpan-dev.js
 **-----------------------------------------------------------
 **  Copyright (c) Weekend Logic <http://weekendlogic.com>
 *************************************************************/
 
(function() {
	var svgNS = "http://www.w3.org/2000/svg";
	var xlinkNS = "http://www.w3.org/1999/xlink";
    
	var PATH = "src/";
    var SCRIPTS = [
	  "SVGPan.Core.js",
	  "SVGPan.Config.js",
	  "SVGPan.Spring.js",
	  "SVGPan.Utils.js",
	  "SVGPan.Viewer.js",
	  "SVGPan.AutoAttach.js",
    ];
    
    for (var i = 0; i < SCRIPTS.length; i++) {
		var s = document.createElementNS(svgNS, "script");
		s.setAttributeNS(xlinkNS, "href", PATH+SCRIPTS[i]);
		document.documentElement.appendChild(s);
    }
    
	// turn debugging on
	var s = document.createElementNS("http://www.w3.org/2000/svg", "script");
	var t = document.createTextNode("func = function() {SVGPan.Config.debugMode = true;};if (window.addEventListener) window.addEventListener('load', func,false); else if (elem.attachEvent) window.attachEvent('onload', func);");
	s.appendChild(t);
	document.documentElement.appendChild(s);
})();
