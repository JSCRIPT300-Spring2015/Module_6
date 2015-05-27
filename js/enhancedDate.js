var enhancedDate = (function () {

	var _date = null;
	var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
		'September', 'October', 'November', 'December'];

	function initDate() {

		if (_date === null) {
			_date = new Date();
		}
	}

	function setDate(date) {

		if (date instanceof Date || typeof date === 'number') {
			_date = new Date(date);
		} else {
			_date = new Date();
		}

		return _date;
	}

	function getDate(returnObj) {

		initDate();

		return returnObj ? _date : _date.getTime();
	}

	function getDayName() {

		initDate();

		return dayNames[_date.getDay()];
	}

	function getMonthName() {

		initDate();

		return monthNames[_date.getMonth()];
	}

	function isToday() {

		initDate();

		var today = new Date();

		return (today.getDate() === _date.getDate() && today.getMonth() === _date.getMonth() &&
		today.getYear() === _date.getYear());
	}

	function isFuture() {

		initDate();

		var now = new Date();

		return _date > now;
	}

	return {
		setDate: setDate,
		getDate: getDate,
		getDayName: getDayName,
		getMonthName: getMonthName,
		isToday: isToday,
		isFuture: isFuture
	};
})();