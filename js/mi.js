
//var a = $('.div1ul li').index();

			$('.lixiala0').mouseenter(function() {


				$('.class0').slideDown()



				$('.pi').mouseleave(function() {


					$('.pi').slideUp("slow")

				})


				$('.pi').mouseenter(function() {

					$('.class0').slideDown()
					$('.lixiala0').mouseleave(function() {


						$('.pi').slideUp("slow")


					})
				})

			})









			//					$('.ssbb1').hover(function() {
			//						$('.class0').css('display', 'block');
			//					});
			//					$('.class0').hover(function() {
			//						$('.class0').css('display', 'block');
			//					},
			//					function(){
			//						$('.class0').css('display', 'none');
			//					});
			//
			//					$('.ssbb2').hover(function() {
			//						$('.class1').css('display', 'block');
			//					},
			//					function(){
			//						$('.class1').css('display', 'none');
			//					});



			window.onload = function() {
				var current_index = 0;
				var timer = window.setInterval(autochange, 1500);
				var button_li = document.getElementById("button").getElementsByTagName("li");
				var pic_div = document.getElementById("lb_pic").getElementsByTagName("div");
				for (var i = 0; i < button_li.length; i++) {
					button_li[i].onmouseover = function() {
						if (timer) {
							clearInterval(timer);
						}
						for (var j = 0; j < pic_div.length; j++) {
							if (button_li[j] == this) {
								current_index = j;
								button_li[j].className = "current";
								pic_div[j].className = "current";
							} else {
								pic_div[j].className = "pic";
								button_li[j].className = "but";
							}
						}
					}
					button_li[i].onmouseout = function() {
						timer = setInterval(autochange, 2000);
					}
				}

				function autochange() {
					++current_index;
					if (current_index == button_li.length) {
						current_index = 0;
					}
					for (var i = 0; i < button_li.length; i++) {
						if (i == current_index) {
							button_li[i].className = "current";
							pic_div[i].className = "current"
						} else {
							button_li[i].className = "but";
							pic_div[i].className = "pic";
						}
					}
				}
			}