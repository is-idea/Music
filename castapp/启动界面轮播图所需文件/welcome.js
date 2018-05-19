/*
 * 东翌学院 -专注跨平台APP开发培训!  http://www.dongyixueyuan.com 
 *
 * QQ: 2195138852
 * 
 */

window.dongyi_welcome = function(json){
		mui.init({
				swipeBack:true, //启用右滑关闭功能
				scrollIndicator: "none"
		});
		var vH = document.documentElement.clientHeight;
		var slider = document.getElementById('slider');
		slider.style.height = vH + 'px';
		
		//判断是否为第一次登录
		var appWelcome = localStorage.getItem('appWelcome');
		if(appWelcome){
			mui.plusReady(function(){
				var terger_path = plus.webview.create(json.preLoadUrl,json.preLoadId,'');
				terger_path.show();
				setTimeout(function(){
					plus.navigator.closeSplashscreen();
				},500);
				
			});
		}else{
			//预加载
			mui.plusReady(function(){
				plus.navigator.closeSplashscreen();
				var productView = mui.preload({
			        url: json.preLoadUrl,
			        id: json.preLoadId
			    });
			    
			    if(productView){
			    	clickEvent(productView);
			    }
			    
			});
			
			function clickEvent(productView){
				var dy_enter = document.getElementById('dy_enter');
				dy_enter.onclick = function(){	
					localStorage.setItem('appWelcome',true);
					productView.show("pop-in", 200);
						
				}
			}
		
		}
		
		
		
		//监听安卓返回键
		var first = null;
		mui.back = function() {
			if (!first) {
			   first = new Date().getTime();
			   mui.toast('再按一次退出应用');
			   setTimeout(function() {
			       irst = null;
			   }, 1000);
			} else {
			   if (new Date().getTime() - first < 1000) {
			       plus.runtime.quit();
			    }
			}
		}
	
	
}


 