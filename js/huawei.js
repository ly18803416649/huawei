window.onload=function(){
	var banner=getClass('banner',document)[0];
	var bannerNav=getClass('banner_nav',banner);
	var yuan=getClass('yuan',banner)[0];
	var bannerLis=yuan.getElementsByTagName('li');
	var bannerLeft=getClass('left',banner)[0];
	var bannerRight=getClass('right',banner)[0];


	console.log(banner);
	console.log(bannerNav);
	console.log(yuan);
	console.log(bannerLis);
	console.log(bannerLeft);
	console.log(bannerRight);

	var index=0;
	var t;
	bannerNav[0].style.zIndex=10;
	function move(){
		index++;
		if(index==bannerNav.length){index=0}
		for(var i=0;i<bannerNav.length;i++){
			bannerNav[i].style.zIndex=0;
			bannerLis[i].style.background="#868686";
		}
		bannerNav[index].style.zIndex=10;
		bannerLis[index].style.background="#ffffff";
	}
    
    t=setInterval(move,5000);

    for(var j=0;j<bannerLis.length;j++){
    	bannerLis[j].a=j;
    	bannerLis[j].onclick=function(){
    		for(var i=0;i<bannerLis.length;i++){
    			bannerLis[i].style.background="#868686";
    			bannerNav[i].style.zIndex=0;
    		}
    		bannerLis[this.a].style.background="#ffffff";
    		bannerNav[this.a].style.zIndex=10;
    		index=this.a;
    	}
    }


    bannerLeft.style.zIndex=0;
    bannerRight.style.zIndex=0;
    banner.onmouseover=function(){
        bannerLeft.style.zIndex=20;
        bannerRight.style.zIndex=20;
    }
     banner.onmouseout=function(){
        bannerLeft.style.zIndex=0;
        bannerRight.style.zIndex=0;
    }


     bannerRight.onclick=function(){
     	if(index==bannerNav.length){index=0}
        move();
     }
     bannerLeft.onclick=function(){
       index--;
       if(index==-1){index=bannerNav.length-1}
        for(var i=0;i<bannerNav.length;i++){
            bannerNav[i].style.zIndex=0;
            bannerLis[i].style.background="#868686";
        }
        bannerLis[index].style.background="#ffffff";
        bannerNav[index].style.zIndex=10;
     }
}