//code by yuxi4n

$(document).ready(function() {
	$("#_0").addClass("active_li").css("color","#333333");
	$(".Ww_B").hide();
	$("#Ww_B_0").show();
	$("#Db_MainNav li a").click(function(){
		$("#Db_MainNav li a").removeClass("active_li").css("color","");
		$(this).addClass("active_li").css("color","#333333");
		var Ww_id = this.id;
		$(".Ww_B").hide();
		$("#Ww_B"+Ww_id).show();
	})
	$(".Ww_B_table tr").mouseover(function(){  
                $(this).addClass("over");}).mouseout(function(){ 
                $(this).removeClass("over");})
//    $(".Ww_B_table tr:even").addClass("alt");
//	$(".Ww_B_3_table tr").click(function(){
//					$(".Ww_B_3_table tr").removeClass("cli");
//					$(this).addClass("cli");
//	})
});
