/*!
* jQuery.fontSizeSwitch
*
* @version beta
* @author Kazuhito Shiba
*/
 
(function($){
	$.fn.fontSize = function(options){
		var opt = options ? options : {};
		var setting = {
			'targetArea' : '#contents',
			'sizes' : '87%,100%,114%',
			'btnId' : 'fontSmall,fontMidium,fontLarge'
		};	
		$.extend(setting,opt);
		
		var defoSize;
		var cookies = document.cookie.split("; ");
		for(var i=0; i<cookies.length; ++i){
			var cookieStr = cookies[i].split('=');
			if( cookieStr[0] == 'fontSize' ){
				defoSize = cookieStr[1];
				break;
			};
		};	
		
		var btnTxt = ['\u5c0f','\u4e2d','\u5927'];
		var sizeArr = setting.sizes.split(',');
		var idArr = setting.btnId.split(',');
		var btnNum = sizeArr.length;
		if( btnNum < idArr.length ){
			idArr.splice(1,1);
			btnTxt.splice(1,1);
		};
		
		$(this).append('<ul id="fontSizeBtn" />');
		
		
		for( i=0; i<btnNum; ++i ){
			$('#fontSizeBtn').append('<li id="' + idArr[i] + '"><span>' + btnTxt[i] + '</span></li>');
			$('#'+idArr[i]).data('size',sizeArr[i]);
			if( defoSize == 'undefined' && sizeArr[i] == '100%' ){
				defoSize = sizeArr[i];
			};
		};
		
		var $btn = $('#fontSizeBtn').children('li');
		$btn.on('click',function(){
			var changeSize = $(this).data('size');
			$( setting.targetArea ).css('font-size',changeSize);
			document.cookie = 'fontSize='+changeSize;
		});
		
		$( setting.targetArea ).css('font-size',defoSize);
	};
})(jQuery);