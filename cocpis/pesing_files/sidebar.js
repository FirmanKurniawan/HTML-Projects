// JavaScript Document

$(document).ready(function() {
	$('#sidebar').animate( {left: 0}, 500 );

	//OPEN BUTTONS
	$('#commentsbutton').click(function() {
		$('#commentswrap').animate({left: 230}, 500, 'linear')
		$('#comments').css({display: 'block'});
		$('#sidebar').animate({top: '13%'}, 500, 'linear')
		$('#sidebarhide').css( {display: 'none'} );
		$('#commentsbutton').css( {display: 'none'} );
		$('#commentsclosebutton').css( {display: 'block'} );
		$('#commentsbutton').removeClass('slideleft');
	});
	
	$('#pollbutton').click(function() {
		$('#pollwrap').animate({left: 230}, 500, 'linear')
		$('#poll').css({display: 'block'});
		$('#sidebarhide').css( {display: 'none'} );
		$('#pollbutton').css( {display: 'none'} );
		$('#pollclosebutton').css( {display: 'block'} );
		$('#pollbutton').removeClass('slideleft');
	});
	
	//CLOSE BUTTONS
	$('#commentsclosebutton').click(function() {
		$('#commentsclosebutton').parent().animate({left: 0}, 500, function() {
			$('#comments').css({display: 'none'})
		});
		$('#sidebar').animate({top: '29%'}, 500, 'linear')
		$('#sidebarhide').css( {display: 'block'} );
		$('#commentsclosebutton').css( {display: 'none'} );
		$('#commentsbutton').css( {display: 'block'} );
		$('#commentsbutton').addClass('slideleft');

	});
	
	$('#pollclosebutton').click(function() {
		$('#pollclosebutton').parent().animate({left: 0}, 500, function() {
			$('#poll').css({display: 'none'})
		});
		$('#sidebarhide').css( {display: 'block'} );
		$('#pollclosebutton').css( {display: 'none'} );
		$('#pollbutton').css( {display: 'block'} );
		$('#pollbutton').addClass('slideleft');
	});
	
	//POLL POST BUTTON
	$('#postbutton').click(function() {
		if( $('#postcommentname').val() == '' ) {
			alert("Please enter your name");
		} else if( $('#postcommentarea').val() == '') {
			alert("Please enter your comment");
		} else if( $('#postcommentname').val() != '' && $('#postcommentarea').val() != '') {
			alert("Please use the cheat before posting a comment");
		}
	});
});