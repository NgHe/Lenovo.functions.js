// ==UserScript==
// @name        ShowCountryName
// @namespace   ShowCountryName
// @include     http://wpc.lenovo2.com/aio/*
// @version     1
// @grant       none
// ==/UserScript==

var region= document.getElementsByTagName("ul");
var country0=region[0].getElementsByTagName("li");
var country1=region[1].getElementsByTagName("li");
var country2=region[2].getElementsByTagName("li");
var countrylisteet=["Poland","Turkey","Czech Republic","Romania","Hungary","Bulgaria","Croatia","Serbia","Greece","Slovakia","Slovenia","Macedonia"];
var countrylistrucis=["Russia","Kazakhstan","Ukrain","Moldova","Belarus"];
var countrylistmea=["Egypt","UAE","SaudiArabia","South Africa","Kenya","Tanzania","Jordan","Lebanon","Pakistan","Angola","Nigeria","Ghana","Morocco","Tunisia","Algeria"];

for (var k=0;k<12;k++){
    country0[k].onclick=(function(k){
        return function(){
	           document.getElementsByTagName("textarea")[0].innerText=countrylisteet[k];
               };
    })(k);
}

for (var i=0;i<5;i++){
    country1[i].onclick=(function(i){
        return function(){
	    document.getElementsByTagName("textarea")[0].innerText=countrylistrucis[i];
        };
    })(i);
}

for (var j=0;j<15;j++){
    country2[j].onclick=(function(j){
        return function(){
	    document.getElementsByTagName("textarea")[0].innerText=countrylistmea[j];
        };
    })(j);
}
