//make hamburger menu functional


//boolean to be checked in case the html is clicked around the hamburger menu
var hamburgerClicked = false;

$('.mobile-nav-toggle').click(function (event) {
	$('#hamburger').css('display', 'inline');

	event.stopPropagation();
})

function setburger(tagClass) {
	$(tagClass).click(function (e) {
		//		$(tagClass).css('border', '1px solid black');
		$(tagClass).css('color', 'white');
		setTimeout(function () {
			//			$(tagClass).css('border', '1px solid white');
			$(tagClass).css('color', 'black');
		}, 125)
	})
}

var hamburgerTags = ['#home', '#boba', '#store', '#about', '#tickets'];
for (var i = 0; i < hamburgerTags.length; i++) {
	setburger(hamburgerTags[i]);
}

$(document).click(function (e) {
	console.log($(e.target).closest()['prevObject'][0].id);
	var clicked_id = $(e.target).closest()['prevObject'][0].id;
	if (hamburgerTags.indexOf("#" + clicked_id) == -1 &&
		clicked_id != 'hamburger'
	) {
		$('#hamburger').css('display', 'none');

	}
});
