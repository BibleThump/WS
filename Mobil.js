function detectmob() { 
           if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
           ){return true;}
           else {return false;}
       }


function onSiteLoad(id){
    if(detectmob()){

        document.getElementById(id).remove();
 
         if(id == "bg1"){
            color = "#4d79ff"
        }
        else if(id == "bg2"){
            color = "#4d79ff"
        }
        else if(id == "bg3"){
            color = "#ffcc00"
        }
        else if(id == "bg4"){
            color = "#c1c1a4"
        }
        else if(id == "bg5"){
            color = "#000066"
        }
        else if(id==  "bg6"){
            color=  "603f20"
        }
        else if(id == "bg7"){
            color=""
        }
        else if(id =="bg8"){
            color = "#660033"
        }
        else if(id=="bg9"){
            color ="#800000"
        }

		
        document.body.style.backgroundColor = color;

		//document.getElementsByClassName("search-search-box").style.marginLeft = "30px";
        document.getElementById("cbg").style.width = "100%";
        document.getElementById("character").style.width = "100%";
        document.getElementById("HeaderBackground").style.width = "129%";				
        
        bilder = document.getElementsByClassName("bild1");
        for(i=0 ; i < bilder.length ; i++){
            bilder[i].style.marginLeft = "30px" ;
        }					
        bilder = document.getElementsByClassName("bild2");
        for(i=0 ; i < bilder.length ; i++){
            bilder[i].style.marginLeft = "215px" ;
        }
        bilder = document.getElementsByClassName("bild3");
        for(i=0 ; i < bilder.length ; i++){
            bilder[i].style.marginLeft = "395px" ;
        }					
        bilder = document.getElementsByClassName("bild4");
        for(i=0 ; i < bilder.length ; i++){
            bilder[i].style.marginLeft = "575px" ;
        }										
        bilder = document.getElementsByClassName("bild5");
        for(i=0 ; i < bilder.length ; i++){
            bilder[i].style.marginLeft = "755px"	 ;
        }
    }
}