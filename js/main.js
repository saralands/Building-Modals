$(document).on('ready', function(){

	var modal = function (state){
		if(state === 'open'){
			$('.modal-wrapper').fadeIn();
		}else{
			$('.modal-wrapper').fadeOut(function(){
				$('body').removeClass('modal-on');
			});
		}
	};

		//wrap this in an if statmemt
		//if state === 'open', fadeIn
		

		//else, close
	};

	//attatch click event to .js-model-activate
	// to invoke modal();
	$('.js-modal-activate').on('click', function(){
		modal('open');
	})

	$('.js-modal-close').on('click', function(){
		modal('close');
	})


}); //closes doc.ready