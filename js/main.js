$(document).ready(function(){
	$('carousel').carousel({
		interval:8000
	});
//collapse function in Team page
	//on 1st thumbnail
	$("#detail1").on("hide.bs.collapse",function(){
		$("#mate1").html('Open <span class="icon fa fa-chevron-up"><span/>');
	});
	$("#detail1").on("show.bs.collapse",function(){
		$("#mate1").html('Close <span class="icon fa fa-chevron-down"></span>');
	});

	//on 2nd thumbnail
	$("#detail2").on("hide.bs.collapse",function(){
		$("#mate2").html('Open <span class="icon fa fa-chevron-up"><span/>');
	});
	$("#detail2").on("show.bs.collapse",function(){
		$("#mate2").html('Close <span class="icon fa fa-chevron-down"></span>');
	});

	//on 3rd thumbnail
	$("#detail3").on("hide.bs.collapse",function(){
		$("#mate3").html('Open <span class="icon fa fa-chevron-up"><span/>');
	});
	$("#detail3").on("show.bs.collapse",function(){
		$("#mate3").html('Close <span class="icon fa fa-chevron-down"></span>');
	});

	//on 4th thumbnail
	$("#detail4").on("hide.bs.collapse",function(){
		$("#mate4").html('Open <span class="icon fa fa-chevron-up"><span/>');
	});
	$("#detail4").on("show.bs.collapse",function(){
		$("#mate4").html('Close <span class="icon fa fa-chevron-down"></span>');
	});
});