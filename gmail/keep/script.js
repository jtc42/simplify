// == SIMPL =====================================================
// Turn debug loggings on/off
var simplifyDebug = true;

// Add simpl style to html tag
var htmlEl = document.documentElement;
htmlEl.classList.add('simpl');

// Add keyboard shortcut for toggling on/off custom style
function toggleSimpl(event) {
	// If Cmd+J was pressed, toggle simpl
	if (event.metaKey && event.which == 74) {
		htmlEl.classList.toggle('simpl');
		event.preventDefault();
	}
}
window.addEventListener('keydown', toggleSimpl, false);