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