/*
 * jMyBitcoin: A jQuery bitcoin plugin. Shows the value of btc - v1.0 - 04/02/2014
 * Copyright (c) 2014 Vicente Garcia (vicentegarcia.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */

;(function($) {
	$.fn.jmybitcoin = function(currency) {
		var cur;

		if (!currency)
			var cur = 'EUR';
		else
			cur = currency;

		return this.each(function () {
			var context = $(this);

			$.ajax({
				url: './bitcoin.php',
				dataType: 'html',
				data: {currency: cur}
			})
			.done(function(data) {
				context.append(data);
			});
		});
	};
})(jQuery);

