// TODO
// put it into class!
// optimize this!

var gnc_active = 0;
var gnc_mode = -1;

function getNextColor(colors, incr=1) {
	colors = colors.map(c => { return (c < 0) ? 0 : (c > 255) ? 255 : c })

	let hex = colors.map(c => {return c / 255;});

	if ( hex.filter(h => {return h<1 && h>0}).length == 0 )
		if (hex.join("").match(/[1]/g).length == 2) {
			gnc_active = (hex.indexOf(0) == 1)
				? 2
				: hex.indexOf(1);
			gnc_mode = -1;
		}
		else {
			gnc_active = (hex.indexOf(1) + 1) % 3;
			gnc_mode = 1;
		}

	colors[gnc_active] += gnc_mode * incr;

	return colors;
}