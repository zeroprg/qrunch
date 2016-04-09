var history = '';
var x = window.frames[0];
var dom = window.frames[1];

window.console = {
	log: function (data) {
		history += data + '<br>';
	}
}

function debug() {

	if (typeof(dom.Ext) != 'undefined') dom.Ext.is.Phone = true; else return '';

	function hE(s) {
		s = s.replace(/&/g, '&amp;');
		s = s.replace(/>/g, '&gt;');
		s = s.replace(/</g, '&lt;');
		return s;
	} 
	
	var logger = '';
	var i, v, st;

	for (i in dom) {
		if (!(i in x) ) {
			window[i] = dom[i];
				v = dom[i];
				logger += '<div class="var-name" onclick="alert(\'';
				logger += ('\'">' + hE(typeof(dom[i])) + ' <b>' + hE(i) + '</b></div> ');
				// logger += ('<div class="var-data">');
				// if (v === null)
				// 	logger += ('null');
				// else 
				// 	if (v === undefined) logger += ('undefined');
				// 		else
				// 	try {
				// 		st = v.toString();
				// 		if (st.length)
				// 			logger += (hE(v.toString()));
				// 		else 
				// 			logger += (" ")
				// 	} catch(er) {
				// 		logger += (hE(er.toString()))
				// 	};
				// logger += ('</div>');
		}
	}
	return logger;
}