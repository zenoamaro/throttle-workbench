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

var _BenchRun = require('./BenchRun');

var _BenchRun2 = _interopRequireDefault(_BenchRun);

var _BenchTest = require('./BenchTest');

var _BenchTest2 = _interopRequireDefault(_BenchTest);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

/**
 * A container for the "Run" and "Test" sub-panels.
 */

var BenchPanel = (function (_Component) {
    _inherits(BenchPanel, _Component);

    function BenchPanel() {
        var _this = this;

        _classCallCheck(this, BenchPanel);

        _get(Object.getPrototypeOf(BenchPanel.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            tab: 'run'
        };

        this.onTabChange = function (id) {
            _this.setState({ tab: id });
        };
    }

    _createClass(BenchPanel, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'BenchPanel' },
                _react2['default'].createElement(_Tabs2['default'], {
                    className: 'BenchPanel-Tabs',
                    tabs: [{ id: 'run', label: 'Run' }, { id: 'test', label: 'Test' }],
                    selected: this.state.tab,
                    onChange: this.onTabChange
                }),
                this.state.tab === 'run' && _react2['default'].createElement(_BenchRun2['default'], null),
                this.state.tab === 'test' && _react2['default'].createElement(_BenchTest2['default'], null)
            );
        }
    }]);

    return BenchPanel;
})(_Component3['default']);

exports['default'] = BenchPanel;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9CZW5jaFBhbmVsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7OzBCQUNILGFBQWE7Ozs7d0JBQ2QsWUFBWTs7Ozt5QkFDWCxhQUFhOzs7O29CQUNsQixRQUFROzs7Ozs7OztJQU1KLFVBQVU7Y0FBVixVQUFVOzthQUFWLFVBQVU7Ozs4QkFBVixVQUFVOzttQ0FBVixVQUFVOzthQUUzQixLQUFLLEdBQUc7QUFDSixlQUFHLEVBQUUsS0FBSztTQUNiOzthQUVELFdBQVcsR0FBRyxVQUFDLEVBQUUsRUFBSztBQUNsQixrQkFBSyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUM5Qjs7O2lCQVJnQixVQUFVOztlQVVyQixrQkFBRztBQUNMLG1CQUNJOztrQkFBSyxTQUFTLEVBQUMsWUFBWTtnQkFDdkI7QUFDSSw2QkFBUyxFQUFDLGlCQUFpQjtBQUMzQix3QkFBSSxFQUFFLENBQ0YsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFDekIsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLEVBQUUsQ0FDOUIsQUFBQztBQUNGLDRCQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEFBQUM7QUFDekIsNEJBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxBQUFDO2tCQUM3QjtnQkFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksNkRBQVc7Z0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLE1BQU0sSUFBSSw4REFBWTthQUN4QyxDQUNSO1NBQ0w7OztXQTNCZ0IsVUFBVTs7O3FCQUFWLFVBQVUiLCJmaWxlIjoiQmVuY2hQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCBCZW5jaFJ1biBmcm9tICcuL0JlbmNoUnVuJztcbmltcG9ydCBCZW5jaFRlc3QgZnJvbSAnLi9CZW5jaFRlc3QnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJztcblxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciB0aGUgXCJSdW5cIiBhbmQgXCJUZXN0XCIgc3ViLXBhbmVscy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVuY2hQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgdGFiOiAncnVuJyxcbiAgICB9XG5cbiAgICBvblRhYkNoYW5nZSA9IChpZCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFiOiBpZCB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJlbmNoUGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJCZW5jaFBhbmVsLVRhYnNcIlxuICAgICAgICAgICAgICAgICAgICB0YWJzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOidydW4nLCBsYWJlbDonUnVuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDondGVzdCcsIGxhYmVsOidUZXN0JyB9LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS50YWJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGFiQ2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50YWIgPT09ICdydW4nICYmIDxCZW5jaFJ1bi8+fVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRhYiA9PT0gJ3Rlc3QnICYmIDxCZW5jaFRlc3QvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19