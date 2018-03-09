export default {
	install(Vue, options) {
		Vue.prototype.interfaceIP = function(address, data, callback, type, json, errorCallback) {
			let _data = data,
				_date = new Date();
			//_data.t = _date.getTime();
			$.ajax({
				type: type || 'POST',
				url: address,
				data: data,
				dataType: json || 'json',
				global: true,
				success: function(ret) {
					if (ret) {
						callback(ret);
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					errorCallback ? errorCallback() : '';
					callback("ajax error");
				}
			});
		};
	}
}