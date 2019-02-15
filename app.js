$(document).ready(function() {

	let selectedColor = '';
	let bGroung = 'rgba(0, 0, 0, 0) linear-gradient(rgb(0, 0, 102), blue) repeat scroll 0% 0% / auto padding-box border-box';

	$('.selector-inner').click(function() {
		$('.selector-outer').css('background-color', 'blue');
		let peg = ($(this).parent())[0];
		selectedColor = $(this).css('background-color');
		$(peg).css('background-color', selectedColor);
	});

	$('.guess-peg').click(function() {
		let number = parseInt($(this).css('border'));
		if(number === 1) {
			$(this).css('background', 'none');
			$(this).css('background-color', selectedColor);
			$(this).css('border', '2px solid white');
		} else {
			$(this).css('background', bGroung);
			$(this).css('border', '1px solid white');
		}
	});

});