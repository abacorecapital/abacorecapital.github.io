// JavaScript Document

window.addEvent('domready',function()
{
	$$('a.external').each(function(element,index)
	{
		element.setProperty('target', '_blank');
	});
	
	$$('#bottommenu a').each(function(element,index)
	{
		var fx = element.effects({duration: 200, transition: Fx.Transitions.Quad.easeOut, wait: false});
		
		element.addEvents({
											
			'mouseenter' : function()
			{
				fx.start({ 'background-color' : '#FBBE25', 'padding' : 5, 'margin' : 0 })
			},
			
			'mouseleave' : function()
			{
				fx.start({ 'background-color' : '#fff', 'padding' : 0, 'margin' : 5 });
			}
		});
	});
	
	$$('#menu a').each(function(element,index)
	{
		var fx = element.effects({duration: 200, transition: Fx.Transitions.Quad.easeOut, wait: false});
		
		element.addEvents({
											
			'mouseenter' : function()
			{
				fx.start({ 'background-color' : '#fff', 'padding' : 5, 'margin' : 0 })
			},
			
			'mouseleave' : function()
			{
				fx.start({ 'background-color' : '#FBBE25', 'padding' : 0, 'margin' : 5 });
			}
		});
	});
	
	$$('.options').each(function(element,index)
	{
		var fx = element.effects({duration: 200, transition: Fx.Transitions.Quad.easeOut, wait: false});
		
		element.addEvents({
											
			'mouseenter' : function()
			{
				fx.start({ 'background-color' : '#ff9900', 'color' : '#000' })
			},
			
			'mouseleave' : function()
			{
				fx.start({ 'background-color' : '#FFFF99', 'color' : '#222' });
			}
		});
	});
	
	var scrollFX = new Fx.Scroll(window,{duration: 1000, transition: Fx.Transitions.Expo.easeInOut, wait: false}); 
	
	$$('.totop').each(function(element,index)
	{
		element.addEvent('click',function(event)
		{
			event = new Event(event).stop();
			scrollFX.toTop();
		});
	
	});
	
	
	
});