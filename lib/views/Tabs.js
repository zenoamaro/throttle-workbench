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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

/**
 * A simple control displaying a tab-strip where only one tab
 * can be selected at once.
 */

var Tabs = (function (_Component) {
    _inherits(Tabs, _Component);

    function Tabs() {
        var _this = this;

        _classCallCheck(this, Tabs);

        _get(Object.getPrototypeOf(Tabs.prototype), 'constructor', this).apply(this, arguments);

        this.select = function (tab) {
            _this.props.onChange(tab.id);
        };

        this.renderTab = function (tab) {
            return _react2['default'].createElement(
                'a',
                { key: tab.id,
                    className: 'Tabs-Tab',
                    onClick: function (e) {
                        return _this.select(tab);
                    },
                    'data-selected': tab.id === _this.props.selected },
                tab.label
            );
        };
    }

    _createClass(Tabs, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: (0, _classnames2['default'])('Tabs', this.props.className) },
                this.props.tabs.map(this.renderTab)
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            className: _react.PropTypes.string,
            tabs: _react.PropTypes.arrayOf(_react.PropTypes.shape({
                id: _react.PropTypes.string,
                label: _react.PropTypes.string
            })),
            selected: _react.PropTypes.string,
            onChange: _react.PropTypes.func
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            tabs: []
        },
        enumerable: true
    }]);

    return Tabs;
})(_Component3['default']);

exports['default'] = Tabs;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9UYWJzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7OzBCQUNILGFBQWE7Ozs7MEJBRXBCLFlBQVk7Ozs7Ozs7OztJQU9OLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7Ozs4QkFBSixJQUFJOzttQ0FBSixJQUFJOzthQWdCckIsTUFBTSxHQUFHLFVBQUMsR0FBRyxFQUFLO0FBQ2Qsa0JBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0I7O2FBVUQsU0FBUyxHQUFHLFVBQUMsR0FBRyxFQUFLO0FBQ2pCLG1CQUNJOztrQkFBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQUFBQztBQUNaLDZCQUFTLEVBQUMsVUFBVTtBQUNwQiwyQkFBTyxFQUFFLFVBQUEsQ0FBQzsrQkFBSSxNQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQUEsQUFBQztBQUMvQixxQ0FBZSxHQUFHLENBQUMsRUFBRSxLQUFLLE1BQUssS0FBSyxDQUFDLFFBQVEsQUFBQztnQkFDNUMsR0FBRyxDQUFDLEtBQUs7YUFDVixDQUNOO1NBQ0w7OztpQkFyQ2dCLElBQUk7O2VBb0JmLGtCQUFHO0FBQ0wsbUJBQ0k7O2tCQUFLLFNBQVMsRUFBRSw2QkFBRyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQUFBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEMsQ0FDUjtTQUNMOzs7ZUF4QmU7QUFDbEIscUJBQVMsRUFBRSxpQkFBRSxNQUFNO0FBQ25CLGdCQUFJLEVBQUUsaUJBQUUsT0FBTyxDQUFDLGlCQUFFLEtBQUssQ0FBQztBQUN2QixrQkFBRSxFQUFFLGlCQUFFLE1BQU07QUFDWixxQkFBSyxFQUFFLGlCQUFFLE1BQU07YUFDZixDQUFDLENBQUM7QUFDRyxvQkFBUSxFQUFFLGlCQUFFLE1BQU07QUFDbEIsb0JBQVEsRUFBRSxpQkFBRSxJQUFJO1NBQ3RCOzs7O2VBRXdCO0FBQ2xCLGdCQUFJLEVBQUUsRUFBRTtTQUNYOzs7O1dBZGdCLElBQUk7OztxQkFBSixJQUFJIiwiZmlsZSI6IlRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9wVHlwZXMgYXMgVCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcblxuXG4vKipcbiAqIEEgc2ltcGxlIGNvbnRyb2wgZGlzcGxheWluZyBhIHRhYi1zdHJpcCB3aGVyZSBvbmx5IG9uZSB0YWJcbiAqIGNhbiBiZSBzZWxlY3RlZCBhdCBvbmNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogVC5zdHJpbmcsXG5cdFx0dGFiczogVC5hcnJheU9mKFQuc2hhcGUoe1xuXHRcdFx0aWQ6IFQuc3RyaW5nLFxuXHRcdFx0bGFiZWw6IFQuc3RyaW5nLFxuXHRcdH0pKSxcbiAgICAgICAgc2VsZWN0ZWQ6IFQuc3RyaW5nLFxuICAgICAgICBvbkNoYW5nZTogVC5mdW5jLFxuXHR9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB0YWJzOiBbXSxcbiAgICB9XG5cbiAgICBzZWxlY3QgPSAodGFiKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGFiLmlkKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ1RhYnMnLCB0aGlzLnByb3BzLmNsYXNzTmFtZSl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhYnMubWFwKHRoaXMucmVuZGVyVGFiKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclRhYiA9ICh0YWIpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhIGtleT17dGFiLmlkfVxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdUYWJzLVRhYidcbiAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5zZWxlY3QodGFiKX1cbiAgICAgICAgICAgICAgIGRhdGEtc2VsZWN0ZWQ9e3RhYi5pZCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZH0+XG4gICAgICAgICAgICAgICAge3RhYi5sYWJlbH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==