(function ($) {
    $.MACHelper = function () {
    };

    $.MACHelper.prototype = {
		loadBalance: function(address, element) {
			var blockChainAPIURL = $.MACHelper.defaultOptions.blockChainAPIURL + $.MACHelper.defaultOptions.balanceURL;
			blockChainAPIURL = blockChainAPIURL.replace('{{addr}}', address);
			$.get(blockChainAPIURL, function(data) {
				var balance = (data.balance).toFixed(2);
				$(element).parent().parent().parent().find('.mdl-progress').delay(1500).slideUp('fast', function() {
					$(element).fadeIn('fast');
				});
				$(element).text(balance + " MAC");
			});
		},
		openExplorer: function(key, value) {
			switch(key) {
				case "address":
					var blockChainURL = $.MACHelper.defaultOptions.blockChainURL + $.MACHelper.defaultOptions.addressURL;
					blockChainURL = blockChainURL.replace('{{addr}}', value);
					window.open(blockChainURL, '_target');
					break;
			}
		}
    };


    $.MACHelper.defaultOptions = {
		blockChainURL: "http://explorer.machinecoin.org",
		blockChainAPIURL: "http://explorer.machinecoin.org/api",
		addressURL: "/address/{{addr}}",
		balanceURL: "/addr/{{addr}}",
    };

}(jQuery));