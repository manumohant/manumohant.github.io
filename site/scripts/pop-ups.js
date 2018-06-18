/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/
//About Page Pop Up
			var popupProfileStatus = 0;
			
			function loadpopupProfile(){
				if(popupProfileStatus==0){
					$("#popupProfile").fadeIn("slow");
					popupProfileStatus = 1;
				}
			}
			
			function disablepopupProfile(){
				if(popupProfileStatus==1){
					$("#popupProfile").fadeOut("slow");
					popupProfileStatus = 0;
				}
			}
			
			function centerpopupProfile(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupProfileHeight = $("#popupProfile").height();
				var popupProfileWidth = $("#popupProfile").width();
				$("#popupProfile").css({
					"position": "absolute",
					"top": windowHeight/2-popupProfileHeight/2,
					"left": windowWidth/2-popupProfileWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupProfile").fadeOut();
				popupProfileStatus = 0;
				$("#about").click(function(){
				$("#popupProfile").css({
					"visibility": "visible"	});
					disablePopupProjects();
					disablePopupContact();
					disablePopupBlog();
					centerpopupProfile();
					loadpopupProfile();
				    $("#popupProfile").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupProfileClose").click(function(){
					disablepopupProfile();
				});
				$("#bg").click(function(){
					disablepopupProfile();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablepopupProfile();
			});
			});
//Projects Page Pop Up
			var popupProjectsStatus = 0;
			
			function loadPopupProjects(){
				if(popupProjectsStatus==0){
					$("#popupProjects").fadeIn("slow");
					popupProjectsStatus = 1;
				}
			}
			
			function disablePopupProjects(){
				if(popupProjectsStatus==1){
					$("#popupProjects").fadeOut("slow");
					popupProjectsStatus = 0;
				}
			}
			
			function centerPopupProjects(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupProjectsHeight = $("#popupProjects").height();
				var popupProjectsWidth = $("#popupProjects").width();
				$("#popupProjects").css({
					"position": "absolute",
					"top": windowHeight/2-popupProjectsHeight/2,
					"left": windowWidth/2-popupProjectsWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupProjects").fadeOut();
				popupProjectsStatus = 0;
				$("#projects").click(function(){
				$("#popupProjects").css({
					"visibility": "visible"	});
					disablepopupProfile();
					disablePopupContact();
					disablePopupBlog();					
					centerPopupProjects();
					loadPopupProjects();
				    $("#popupProjects").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupProjectsClose").click(function(){
					disablePopupProjects();
				});
				$("#bg").click(function(){
					disablePopupProjects();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupProjects();
			});
			});
//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablepopupProfile();
					disablePopupProjects();
					disablePopupBlog();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});
//Blog Page Pop Up
			var popupBlogStatus = 0;
			
			function loadPopupBlog(){
				if(popupBlogStatus==0){
					$("#popupBlog").fadeIn("slow");
					popupBlogStatus = 1;
				}
			}
			
			function disablePopupBlog(){
				if(popupBlogStatus==1){
					$("#popupBlog").fadeOut("slow");
					popupBlogStatus = 0;
				}
			}
			
			function centerPopupBlog(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupBlogHeight = $("#popupBlog").height();
				var popupBlogWidth = $("#popupBlog").width();
				$("#popupBlog").css({
					"position": "absolute",
					"top": windowHeight/2-popupBlogHeight/2,
					"left": windowWidth/2-popupBlogWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupBlog").fadeOut();
				popupBlogStatus = 0;
				$("#blog").click(function(){
				$("#popupBlog").css({
					"visibility": "visible"	});
					disablepopupProfile();
					disablePopupProjects();					
					disablePopupContact();					
					centerPopupBlog();
					loadPopupBlog();
				    $("#popupBlog").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupBlogClose").click(function(){
					disablePopupBlog();
				});
				$("#bg").click(function(){
					disablePopupBlog();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupBlog();
			});
			});




