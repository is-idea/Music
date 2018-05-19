window.dongyi_nav = function(fn){
	
		var dongyi_nav = document.getElementById('dongyi_nav');
		var dongyi_nav_ul = document.getElementById('dongyi_nav_ul');
		var dongyi_nav_li = dongyi_nav.getElementsByTagName('li');
		var oWidth = dongyi_nav_li['0'].offsetWidth;
		var oLeft = dongyi_nav_li['0'].offsetLeft;
		var down_line = document.getElementById('down_line');
		
		//设置ui宽度
		var ulWidth =  ( oWidth * dongyi_nav_li.length ) + ( oLeft * 2 );
		dongyi_nav_ul.style.width = ulWidth +  'px';
		//设置下划线宽度
		down_line.style.width = oWidth + 'px';
		var slide_data = 0;
		
		var screenWidth = 0;
		
		var target = 0;

		dongyi_nav_ul.ontouchstart = function(ev){
			
			var vW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			
			var touch = ev.touches['0'];
			
			var oldX = touch.clientX;
			
			var oldLeft = dongyi_nav_ul.offsetLeft;
			
						
			
			dongyi_nav_ul.ontouchmove = function(ev){
				
				var touch = ev.touches['0'];
				var newX = touch.clientX;
				
				target = newX - oldX;


				var currentLeft = parseInt(dongyi_nav_ul.offsetLeft);
				
				
		
				
				if(target > 0 && currentLeft >= 0){
					dongyi_nav_ul.style.left = 0 +'px';
					return;

				}else{

					if(-currentLeft >= ulWidth - vW && target < 0){
						
						dongyi_nav_ul.style.left = vW - ulWidth +'px';
					}else{
						
						dongyi_nav_ul.style.left = oldLeft + target +'px';
					}
				}
				
				
				ev.preventDefault();
				
			}
			
		}
		

		
		
		for(var a=0;a<dongyi_nav_li.length;a++){
			
			(function(index){
				dongyi_nav_li[a].onclick = function(){
				
				for(var s=0;s<dongyi_nav_li.length;s++){
					dongyi_nav_li[s].className = '';
				}
					var thisWidth = this.offsetWidth;
					down_line.style.width = thisWidth + 'px';
				
					this.className = "default";
					
					fn(index,this.innerHTML);
				
					dongyi_Move(this,index);
				}
			})(a);
			
		}
		
		
		
		var timer = null;

		function dongyi_Move(obj,index){
			
		    clearInterval(timer);
		    
//		    var count = Math.floor(500/30);
		    var count = Math.floor(100/30);
		    
		    var start = down_line.offsetLeft;
		    
		    var dis = obj.offsetLeft - start - oLeft;
		    
		    
		    var num = 0;
		    timer = setInterval(function(){
		    	num ++ ;
		    	var s = 1 - num / count;
		    	var data = start + dis * (1-s*s*s);
		    	
		    	down_line.style.left =  data   + "px";
		    	
		    	if(num == count){
		    		clearInterval(timer);
		    	}
		    	
		    },30)
		}
	
	
}
