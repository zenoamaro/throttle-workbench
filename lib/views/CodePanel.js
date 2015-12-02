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

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _rawThrottleJs = require('!!raw!../throttle.js');

var _rawThrottleJs2 = _interopRequireDefault(_rawThrottleJs);

var CodePanel = (function (_Component) {
    _inherits(CodePanel, _Component);

    function CodePanel() {
        _classCallCheck(this, CodePanel);

        _get(Object.getPrototypeOf(CodePanel.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CodePanel, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'CodePanel' },
                _react2['default'].createElement(
                    _reactHighlight2['default'],
                    { className: 'CodePanel-Source js' },
                    _rawThrottleJs2['default']
                )
            );
        }
    }]);

    return CodePanel;
})(_Component3['default']);

exports['default'] = CodePanel;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Db2RlUGFuZWwuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7MEJBQ0gsYUFBYTs7Ozs4QkFDYixpQkFBaUI7Ozs7NkJBQ2hCLHNCQUFzQjs7OztJQUd4QixTQUFTO2NBQVQsU0FBUzs7YUFBVCxTQUFTOzhCQUFULFNBQVM7O21DQUFULFNBQVM7OztpQkFBVCxTQUFTOztlQUVwQixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsV0FBVztnQkFDdEI7O3NCQUFXLFNBQVMsRUFBQyxxQkFBcUI7O2lCQUU5QjthQUNWLENBQ1I7U0FDTDs7O1dBVmdCLFNBQVM7OztxQkFBVCxTQUFTIiwiZmlsZSI6IkNvZGVQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAncmVhY3QtaGlnaGxpZ2h0JztcbmltcG9ydCBzb3VyY2VDb2RlIGZyb20gJyEhcmF3IS4uL3Rocm90dGxlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb2RlUGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8SGlnaGxpZ2h0IGNsYXNzTmFtZT0nQ29kZVBhbmVsLVNvdXJjZSBqcyc+XG4gICAgICAgICAgICAgICAgICAgIHtzb3VyY2VDb2RlfVxuICAgICAgICAgICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=