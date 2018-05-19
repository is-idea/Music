// 设置首页轮播图(获得slider插件对象)
var gallery = mui('.mui-slider');
gallery.slider({
  // 自动轮播周期，若为0则不自动播放，默认为0；
  interval:1500
});

// 导航栏透明
mui('.mui-bar-transparent').transparent({
    top: 0,
    offset: 150,
    duration: 16,
    scrollby: document.querySelector('.mui-scroll-wrapper')
})


mui.plusReady(function () {

var topoffset='45px';

var header=document.getElementById('heardermylab');

console.log(header)

console.log(plus.navigator.isImmersedStatusbar())

if(plus.navigator.isImmersedStatusbar()){// 兼容immersed状态栏模式

// 获取状态栏高度并根据业务需求处理，这里重新计算了子窗口的偏移位置

topoffset=(Math.round(plus.navigator.getStatusbarHeight())+45);

header.style.height=topoffset+'px';

header.style.paddingTop=(topoffset-45)+'px';

}

});

