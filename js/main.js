/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-13 15:19:19
 */

'use strict';

$(function() {
  // 当文档加载完成才会执行
  /**
   * 根据屏幕宽度的变化决定轮播图片应该展示什么
   * @return {[type]} [description]
   */
  function resize() {
    // 获取屏幕宽度
    var windowWidth = $(window).width();
    // 判断屏幕属于大还是小
    var isSmallScreen = windowWidth < 768;
    // 根据大小为界面上的每一张轮播图设置背景
    // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
    $('#main_ad > .carousel-inner > .item').each(function(i, item) {
      // 因为拿到是DOM对象 需要转换成jquery对象
      var $item = $(item);
      // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
      var imgSrc =
        isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

      // jQuery方式！！！！
      // $element.data()
      // 是一个函数 ，专门用于取元素上的自定义属性（data-abc）
      // 函数的参数是我们要取得属性名称（abc）

      // 设置背景图片
      $item.css('backgroundImage', 'url("' + imgSrc + '")');
      //
      // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
      if (isSmallScreen) {
        $item.html('<img src="' + imgSrc + '" alt="" />');
      } else {
        $item.empty();
      }
    });
  }
  // $(window).on('resize', resize);
  // // 让window对象立即触发一下resize
  // $(window).trigger('resize');
  $(window).on('resize', resize).trigger('resize');




/*tooltip经过见识title*/
/*$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})*/
$('[data-toggle="tooltip"]').tooltip();

  /**
   * 控制标签页的标签容器宽度
   */
  var $ulContainer = $('.nav-tabs');
  // 获取所有子元素的宽度和
  var width = 30; // 因为原本ul上有padding-left
  // 遍历子元素
  $ulContainer.children().each(function(index, element) {
    // console.log(element.clientWidth);
    // console.log($(element).width());
    width += element.clientWidth;
  });
  // 此时width等于所有LI的宽度总和
  // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
  if (width > $(window).width()) {
    $ulContainer.css('width', width).parent().css('overflow-x', 'scroll');
  }


//a点击注册事件
var $newTitle = $('.news-title');
$('#news .nav-pills a').on('click', function(){
	//获取当前的点击元素
	var $this = $(this);//全局变量本地化
	//$this 只是个变量名，加$是为说明其是个jquery对象。而$(this)是个转换，将this表示的dom对象转为jquery对象，这样就可以使用jquery提供的方法操作
	//获取title值
	var title = $this.data('title');
	//把title放在适当的位置
	$newTitle.text(title);
});

/*固定导航栏*/
$('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
});

/*轮播图部分移动端手指滑动*/
//获取轮播图容器，获取class，因为可能会有多个轮播图
var $carousels = $('.carousel');
var startX , endX ;
var offset = 40;
//注册滑动事件
$carousels.on('touchstart',function(e){
	//获取触摸开始时，记录坐标X
//	console.log(e)输出的是原生的e的信息包括位置信息，然后复制过来即可
	startX = e.originalEvent.touches[0].clientX;
	console.log(startX);
});
$carousels.on('touchmove',function(e){
	//变量重复赋值,移动则x坐标一直在变 
	endX = e.originalEvent.touches[0].clientX;
//	console.log(endX);
});
$carousels.on('touchend',function(e){
	//结束触摸一瞬间，记录触摸的坐标X
	console.log(endX);
	var distance = Math.abs(endX - startX);
	if(distance > offset ){
//		console.log(startX>endX ? '-':'+');
	//2、根据获得的方向选择上一张或者下一张
	//  		$('a').click();
	//			jq给了插件carousel,地址http://v3.bootcss.com/javascript/#carousel-methods
	//插件里面提供.carousel(number)，1、 .carousel(number或者prev，next，pause).
	/*this是根据class，控制不同的轮播图*/
	$(this).carousel(startX > endX? 'next':'prev');
	}
});



});
