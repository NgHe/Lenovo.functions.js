$(document).ready(function(){
        
	var brand=$('div.expandableHeading');
	var way=window.location.pathname;
	// url keyowords for Laptops
	var searLthinkpad=new RegExp('/laptops/thinkpad/');
	var searLideapad=new RegExp('/laptops/ideapad/');
	var searLyoga=new RegExp('/laptops/yoga/');
	var searLlenovo=new RegExp('/laptops/lenovo/');	
	// url keyowords for Tablets
	var searTthinkpad=new RegExp('/tablets/thinkpad/');
	var searTlenovo=new RegExp('/tablets/lenovo/');
	// url keyowords for Desktops
	var searDthinkcentre=new RegExp('/desktops/thinkcentre/');
	var searDlenovo=new RegExp('/desktops/lenovo/');
	var searDideacentre=new RegExp('/desktops/ideacentre/');
	var searDyoga=new RegExp('/desktops/yoga-home');
	// url keyowords for Smart-Devices
	var searSsmartphones=new RegExp('/smart-devices/smartphones/');
	var searSmoto=new RegExp('/smart-devices/moto/');
	// url keyowords for Workstations
	var searWthinkstation=new RegExp('/workstations/thinkstation/');
	var searWthinkpad=new RegExp('/workstations/thinkpad/');
	
	//collapse_all();// function collapse all sections by default 
	if (searLthinkpad.test(way)|| searTthinkpad.test(way)||searDthinkcentre.test(way)||searSsmartphones.test(way)||searWthinkstation.test(way)){	
		collapse_brothers(0);	  
	}else if (searLideapad.test(way)||searTlenovo.test(way)||searDlenovo.test(way)||searSmoto.test(way)||searWthinkpad.test(way)){	
		collapse_brothers(1);
	}else if (searLyoga.test(way)||searDideacentre.test(way)){
		collapse_brothers(2);	
	} else if (searLlenovo.test(way)||searDyoga.test(way)){	
		collapse_brothers(3);
	}
	
   $(brand).click(function(){
          if ($(this).hasClass('expandableHeading-is-expanded')){
              setTimeout(function(){
               $(this).removeClass('expandableHeading-is-expanded');
 	           $(this).siblings('.expandableContent').addClass('is-visuallyhidden expandableContent-is-collapsed');},500);		
    		}
    		else {
    	        $(brand).each(function(index, element){	
 			        if ($(this).hasClass('expandableHeading-is-expanded')){	
 				    $(this).removeClass('expandableHeading-is-expanded');
 				    $(this).siblings('.expandableContent').addClass('is-visuallyhidden expandableContent-is-collapsed');
 			        }
 		        })
    	        $('body').animate({scrollTop:($(brand[0]).offset().top)-120}, 900);
           }
	})
    
    
    function collapse_brothers(t){
    	var brand=$('div.expandableHeading');
    	for (var i=0;i<4;i++){
    		$(brand[i]).removeClass('expandableHeading-is-expanded');
 	        $(brand[i]).siblings('.expandableContent').addClass('is-visuallyhidden expandableContent-is-collapsed');
    	}	
    	$(brand[t]).addClass('expandableHeading-is-expanded');
 	    $(brand[t]).siblings('.expandableContent').removeClass('is-visuallyhidden expandableContent-is-collapsed');
    }
    
    /*function collapse_all(){
    	for (var i=0;i<4;i++){
    		var brand=$('div.expandableHeading');
    		$(brand[i]).removeClass('expandableHeading-is-expanded');
 	        $(brand[i]).siblings('.expandableContent').addClass('is-visuallyhidden expandableContent-is-collapsed');
    	}
    }*/
    
  /*
 function:点击每一个a标签的时候，在点击的url后面加上如下格式的tracking尾巴
 */  
var searLaptops=new RegExp('/laptops/c/Laptops');
var searTablets=new RegExp('/tablets/c/Tablets');
var searSmartdevices=new RegExp('/smart-devices/c/Smart-devices');
var searDesktops=new RegExp('/desktops/c/Desktops');
var searWorkstations=new RegExp('/workstations/c/Workstations');

var searL1=new RegExp('/laptops/thinkpad/c/thinkpad-laptops');
var searL2=new RegExp('/laptops/ideapad/c/ideaPad');
var searL3=new RegExp('/laptops/lenovo/c/lenovo');
var searL4=new RegExp('/laptops/yoga/c/yoga');
var searT1=new RegExp('/tablets/thinkpad/c/thinkpad-tablets');
var searT2=new RegExp('/tablets/lenovo/c/lenovo-tablets');
var searD1=new RegExp('/desktops/thinkcentre/c/thinkcentre');
var searD2=new RegExp('/desktops/lenovo/c/Lenovo');
var searD3=new RegExp('/desktops/ideacentre/c/ideacentre');
var searD4=new RegExp('/desktops/yoga-home/c/yoga-home');
var searS1=new RegExp('/smart-devices/smartphones/c/lenovo-smartphones');
var searS2=new RegExp('/smart-devices/moto/c/moto-smartphones');
var searW1=new RegExp('/workstations/thinkstation/c/thinkstation');
var searW2=new RegExp('/workstations/thinkpad/c/thinkpad-workstations');
var noep=new RegExp('ipromoID');

$(".offCanvas-bar_3-left a").click(function(){
	var win_url,path_name,path_arr,come_from,country,productname;
	path_name=this.pathname;
	path_arr=path_name.split("/");
	country=path_arr[1];
	//idnumber=path_arr[8];
	productname=$(this).attr("title");
	productname=productname.replace(/\s/g,'');
	
	win_url=window.location.pathname;
	if(searLaptops.test(win_url)||searTablets.test(win_url)||searSmartdevices.test(win_url)||searDesktops.test(win_url)||searWorkstations.test(win_url)){
		come_from="_SplitterPage";
	} else if(searL1.test(win_url)||searL2.test(win_url)||searL3.test(win_url)||searL4.test(win_url)||searT1.test(win_url)||searT2.test(win_url)||searD1.test(win_url)||searD2.test(win_url)||searD3.test(win_url)||searD4.test(win_url)||searS1.test(win_url)||searS2.test(win_url)||searW1.test(win_url)||searW2.test(win_url)) {
		come_from="_BrandPage";
	} else{
		come_from="_SeriesPage";
	}
	if(!noep.test(this.href)){
	    this.href=this.href+'?ipromoID='+country+'_sidebar_'+productname+come_from;
		//alert(this.href);
	}
})
       
})
