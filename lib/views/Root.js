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

var _CodePanel = require('./CodePanel');

var _CodePanel2 = _interopRequireDefault(_CodePanel);

var _BenchPanel = require('./BenchPanel');

var _BenchPanel2 = _interopRequireDefault(_BenchPanel);

var Root = (function (_Component) {
    _inherits(Root, _Component);

    function Root() {
        _classCallCheck(this, Root);

        _get(Object.getPrototypeOf(Root.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Root, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'Root' },
                _react2['default'].createElement(_CodePanel2['default'], null),
                _react2['default'].createElement(_BenchPanel2['default'], null)
            );
        }
    }]);

    return Root;
})(_Component3['default']);

exports['default'] = Root;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Sb290LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7OzBCQUNILGFBQWE7Ozs7eUJBQ2IsYUFBYTs7OzswQkFDWixjQUFjOzs7O0lBR2hCLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7OEJBQUosSUFBSTs7bUNBQUosSUFBSTs7O2lCQUFKLElBQUk7O2VBRWYsa0JBQUc7QUFDTCxtQkFDSTs7a0JBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLDhEQUFZO2dCQUNaLCtEQUFhO2FBQ1gsQ0FDUjtTQUNMOzs7V0FUZ0IsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiUm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBDb2RlUGFuZWwgZnJvbSAnLi9Db2RlUGFuZWwnO1xuaW1wb3J0IEJlbmNoUGFuZWwgZnJvbSAnLi9CZW5jaFBhbmVsJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUm9vdFwiPlxuICAgICAgICAgICAgICAgIDxDb2RlUGFuZWwvPlxuICAgICAgICAgICAgICAgIDxCZW5jaFBhbmVsLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19