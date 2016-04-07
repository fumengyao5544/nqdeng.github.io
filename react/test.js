define(function (require, exports, module) {
	exports.render = function (data) {
		ReactDOM.render(
			React.createElement('div', null, [
				React.createElement('h1', { key: 'e1' }, data.title),
				React.createElement('p', { key: 'e2' }, data.content)
			]),
			document.getElementById('foo')
		);
	};
});