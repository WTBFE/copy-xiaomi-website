$(function(){


	// header  nav  all
	(function () {
			var $header=$("#header .h-m-right .h-m-shop");
			var $h_down=$("#header .h-m-right .h-m-shop .h-m-shopdown");
			$($header).hover(
			function(){
			$h_down.stop(true).slideDown();
			},
			function(){
			$h_down.stop(true).slideUp();
			})
			//search   input    get   focus
			var $search=$(".header-center .header-search");
			var $input=$(".header-center .header-search .header-s-input input");
			var $hide=$(".header-search .h-sea-hide");
			$input.focus(function(){
			$search.addClass("focus");
			$hide.fadeIn();
			}).blur(function(){
			$search.removeClass("focus");
			$hide.fadeOut();
			})
			//mouse hover  show  product     滑动显示产品栏
			var $one=$(".header-center .header-nav .n-m-one");
			var $product=$("#header-product");
			var $pul=$("#header-product .h-p-main ul");
			$one.hover(function(){
			var index=$(this).index();
			$product.stop(true).slideDown(300);
			$pul.eq(index).show().siblings().hide();
			},function(){
			$product.stop(true).slideUp(300);
			});

			$product.hover(function(){
			$(this).stop(true).slideDown(300);
			},function(){

			$(this).stop(true).slideUp(300);
			});
	})();
	/*header     end*/

	/*banner*/ 
	(function(){
				var $tabli=$(".b-main  .b-mtab ul li");
				var $picli=$(".b-main .b-pic li");
				var $btn=$(".b-main .b-mbtn div");
				
				var Bindex=0;
				var len=$tabli.length;
				var $banner=$(".banner .b-main");
				$tabli.hover(function(){
				$(this).stop().siblings().addClass('hover');
					},function(){
				$(this).removeClass('hover');
					}).click(function(){
				Bindex=$(this).index();
						tab();
				})
				// left  right  btn
				$btn.click(function(){
				var index=$(this).index();
				if(index){
					Bindex++;
				if(Bindex>len-1){
					Bindex=0;
					}
				tab();
				}
				else{
				Bindex--;
				if(Bindex<0){
				Bindex=len-1;
					}
				tab();
				}	
				})
				$banner.hover(function(){
				clearInterval($banner.time);
				},function(){
				auto();
				})
				function tab(){
				$tabli.eq(Bindex).addClass('click').siblings().removeClass('click');
				$picli.eq(Bindex).fadeIn().siblings().fadeOut();
				}
				function auto(){
				$banner.time=setInterval(function(){
				Bindex++;
				if(Bindex>len-1){Bindex=0;}
				tab();
				},3000)
				}
				auto();
	})();
	(function(){
		var $navli=$(".b-nav>ul>li");		
				$navli.hover(function(){
					$(this).find(".b-nav-hide").show();
				},function(){
					$(this).find(".b-nav-hide").hide();
				});
	})();		
	// banner end	

	// start goods
	(function(){
		var $data=miData.starGoods;
		var len=$data.imgSrc.length;
		
		var html="";
		var $ul=$("#stargood .s-goods ul.ul");
		
		var $btn=$("#stargood .s-title .s-tbtn a");
		var $left=$("#stargood .s-title .s-tbtn a.btn-left");
		var $right=$("#stargood .s-title .s-tbtn a.btn-right");
		var flag=true,time=null;
		for (var i = 0; i < len; i++) {
				html+="<li>"+
		"				<a class='sg-img' href=''><img src='"+$data.imgSrc[i]+"'  alt='' /></a>"+
		"				<a class='sg-title' href=''>"+$data.title[i]+"</a>"+
		"				<p class='sg-data'>"+$data.detail[i]+"</p>"+
		"				<p class='sg-price'>"+$data.price[i]+"</p>"+
		"			</li>";
			}
			$ul.append(html);
			var $li=$("#stargood .s-goods li");
			var margin=$li.eq(5).position().left;
			$btn.click(function(){
				var index=$(this).index();
				if(index){
					if(flag=true){
						flag=!flag;
						$ul.stop(true).animate({marginLeft:-margin},500);
						toggle();
						clearInterval(time);
						auto();
					}
				}else{
					if(flag=!flag)
						flag=!flag;
						$ul.animate({marginLeft:0},500);
						toggle();
						clearInterval(time);
						auto();
					}
			})
		function toggle(){
			$left.toggleClass("click");
			$right.toggleClass("click");
		}
		function auto(){
			time=setInterval(function(){
				if(flag){
					flag=!flag;
					$ul.stop(true).animate({marginLeft:-margin},500);
					toggle();
				}else{
					flag=!flag;
					$ul.stop(true).animate({marginLeft:0},500);
					toggle();
				}
			},4000);
		};
		auto();
	})();		
	// start goods  end

	//match
	(function(){
			var $data=miData.match;
			var $len=$data.length;
			var $right=$(".match	.m-con .m-cright");
			var $tli=$(".match .m-title ul li");
			 $tli.eq(0).addClass('hover')
			var html="";

			for (var i = 0; i < $len; i++) {
				var $ul=$("<ul></ul>");
				$right.append($ul);
			}
			var $ul=$(".match	.m-con .m-cright ul");
			$ul.eq(0).css("display","block");
			$ul.each(function(index){
				for (var i = 0; i <9; i++) {
				if(i<7){
				$li=$("<li class='mc-bottom'>"+
				"						<a href='' class='m-ctop'><img src='img/match/"+$data.attr[index]+"/"+(i+1)+".jpg'  alt='' /></a>"+
				"						<a href='' class='m-ctitle'>"+$data[$data.attr[index]].title[i]+"</a>"+
				"						<p class='m-cprice'>"+$data[$data.attr[index]].price[i]+"</p>"+
				"						<p class='m-cping'>"+$data[$data.attr[index]].comment[i]+"</p>"+
				"						"+
				"					</li>");
				if(i==5 && index==0){
				var $div=$("<div class='m-chide'>"+
				"							<span class='review'>小米的产品值得信赖，用了一段时间，无论是听歌，打电话...</span>"+
				"							<span class='author'> 来自于 气功流 的评价 </span>"+
				"						</div>");
							$li.append($div);
						}
					}else if(i==7){
				$li=$("<li class='mc-eight'>"+
				"						<a href='' class='e-title'>"+$data[$data.attr[index]].title[i]+"</a>"+
				"						<a href='' class='e-img'><img src='img/match/"+$data.attr[index]+"/"+(i+1)+".jpg'  alt='' /></a>"+
				"						<p class='e-price'>"+$data[$data.attr[index]].price[i]+"</p>"+
				"					</li>");
					}else{
					$li=$("<li class='mc-nine'>"+
				"						<a href='' class='n-more'>浏览更多</a>"+
				"						<a href='' class='n-img fa fa-arrow-circle-o-right'></a>"+
				"						<p class='n-ear'>耳机音箱</p>"+
				"					</li>");
					}
					$(this).append($li);
				};

			});
			//mouse  move
			var $li=$(".match	.m-con .m-cright ul li");
			$li.hover(function(){
				$(this).find(".m-chide").stop(true).animate({
					bottom:0,
					opacity:1,
				},200);
			},function(){
				$(this).find(".m-chide").stop(true).animate({
					bottom:-74,
					opacity:0,			
				},200);
			})
			//mouse  hover   subtab
			$tli.mouseover(function(){
				var index=$(this).index();
				$(this).addClass("hover").siblings().removeClass('hover');
				$ul.eq(index).fadeIn(300).siblings().fadeOut(200);
			})
	})();
	// match end
	//contentsub
	(function(){
		var $tabli=$("#contentsub .con-con .c-li .tab li");
		var $wrap=$("#contentsub .con-con .c-li .con-wrap");
		var $li=$("#contentsub .con-con .c-li");
		var $btn=$("#contentsub .con-con .c-li .btn a");
		var len=$wrap.length;
		//jiashuxing 
	    $wrap.each(function(){
	    	this.a=0
	    })
	    //  li  border-top
	    $li.each(function(i){
	    	var color="#ff6700";
	    	switch(i){
	    		case 1:

	    			color="#83c4ee";
	    			break;
	    		case 2:
	    			color="#e53935";
	    			break;
	    		case 3:
	    			color="#2196f3";
	    			break;
	    		
	    	};
	    	$(this).css("border-color",color).find("h3").css("color",color);
	    });
		$tabli.click(function(){
			var nowindex=$(this).parent().parent().parent().index();  //具体的li下标
			var index=$(this).index();
			$(this).addClass('active').stop(true).siblings().removeClass('active');
			$wrap.eq(nowindex)[0].a=index;//转js   .get()
			$wrap.eq(nowindex).stop(true).animate({
				marginLeft:-296*$wrap.eq(nowindex)[0].a
			},500);
		})
		// mouse over  btn
		$li.hover(function(){
			$(this).find(".btn").stop().fadeIn(400);
		},function(){
			$(this).find(".btn").stop().fadeOut(400);
		})
		// mouse click btn
		$btn.click(function(){
			var index=$(this).index();
			var nowindex=$(this).parent().parent().index();
			if(index){//right
				if($wrap.eq(nowindex)[0].a<len-1){

					$wrap.eq(nowindex)[0].a++;
				}else{
					$wrap.eq(nowindex)[0].a=0;
				}			
			}else{
				if($wrap.eq(nowindex)[0].a>0){
					$wrap.eq(nowindex)[0].a--;
				}else{
					$wrap.eq(nowindex)[0].a=len-1;
				}
			}
			$wrap.eq(nowindex).stop(true).animate({
				marginLeft:-296*$wrap.eq(nowindex)[0].a
			},500);
			$("#contentsub .con-con .c-li .tab").eq(nowindex).find("li").eq($wrap.eq(nowindex).get(0).a).stop(true).addClass('active').siblings().removeClass('active');
			})
	})();
	//contentsub end





})






























































































































































































































