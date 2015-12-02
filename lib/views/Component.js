'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var Component = (function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component() {
		_classCallCheck(this, Component);

		_get(Object.getPrototypeOf(Component.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Component, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			// Equivalent to `ReactPureRenderMixin`.
			return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
		}
	}]);

	return Component;
})(_react2['default'].Component);

exports['default'] = Component;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Db21wb25lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7eUNBQ0wsOEJBQThCOzs7O0lBRzdCLFNBQVM7V0FBVCxTQUFTOztVQUFULFNBQVM7d0JBQVQsU0FBUzs7NkJBQVQsU0FBUzs7O2NBQVQsU0FBUzs7U0FFUiwrQkFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFOztBQUUzQyxVQUFPLDRDQUFRLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDM0M7OztRQUxtQixTQUFTO0dBQVMsbUJBQU0sU0FBUzs7cUJBQWpDLFNBQVMiLCJmaWxlIjoiQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb21wYXJlIGZyb20gJ3JlYWN0LWFkZG9ucy1zaGFsbG93LWNvbXBhcmUnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG5cdFx0Ly8gRXF1aXZhbGVudCB0byBgUmVhY3RQdXJlUmVuZGVyTWl4aW5gLlxuXHRcdHJldHVybiBjb21wYXJlKHRoaXMsIG5leHRQcm9wcywgbmV4dFN0YXRlKTtcblx0fVxuXG59XG4iXX0=