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
 * A wrapper for a type="slider" input, with label and unit
 * display.
 */

var Slider = (function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
        var _this = this;

        _classCallCheck(this, Slider);

        _get(Object.getPrototypeOf(Slider.prototype), 'constructor', this).apply(this, arguments);

        this.onChange = function (event) {
            var value = parseInt(event.target.value, 10);
            _this.props.onChange(value);
        };
    }

    _createClass(Slider, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'label',
                { className: (0, _classnames2['default'])('Slider', this.props.className) },
                _react2['default'].createElement(
                    'span',
                    { className: 'Slider-Label' },
                    this.props.label
                ),
                _react2['default'].createElement('input', { className: 'Slider-Control',
                    type: 'range', value: this.props.value,
                    min: this.props.min, max: this.props.max,
                    value: this.props.value, onChange: this.onChange }),
                _react2['default'].createElement(
                    'span',
                    { className: 'Slider-Value' },
                    this.props.value,
                    ' ',
                    this.props.unit
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            className: _react.PropTypes.string,
            label: _react.PropTypes.string,
            unit: _react.PropTypes.string,
            onChange: _react.PropTypes.func,
            value: _react.PropTypes.number,
            min: _react.PropTypes.number,
            max: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            value: 0,
            min: 0,
            max: 100
        },
        enumerable: true
    }]);

    return Slider;
})(_Component3['default']);

exports['default'] = Slider;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9TbGlkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7MEJBQ0gsYUFBYTs7OzswQkFFcEIsWUFBWTs7Ozs7Ozs7O0lBT04sTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs7OzhCQUFOLE1BQU07O21DQUFOLE1BQU07O2FBa0J2QixRQUFRLEdBQUcsVUFBQyxLQUFLLEVBQUs7QUFDbEIsZ0JBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxrQkFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCOzs7aUJBckJnQixNQUFNOztlQXVCakIsa0JBQUc7QUFDTCxtQkFDSTs7a0JBQU8sU0FBUyxFQUFFLDZCQUFHLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxBQUFDO2dCQUNqRDs7c0JBQU0sU0FBUyxFQUFDLGNBQWM7b0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztpQkFDZDtnQkFFUCw0Q0FBTyxTQUFTLEVBQUMsZ0JBQWdCO0FBQzFCLHdCQUFJLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQUFBQztBQUNyQyx1QkFBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxBQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxBQUFDO0FBQ3pDLHlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEFBQUMsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQUFBQyxHQUFFO2dCQUUxRDs7c0JBQU0sU0FBUyxFQUFDLGNBQWM7b0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSzs7b0JBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO2lCQUNoQzthQUNILENBQ1Y7U0FDTDs7O2VBdENlO0FBQ2xCLHFCQUFTLEVBQUUsaUJBQUUsTUFBTTtBQUNuQixpQkFBSyxFQUFFLGlCQUFFLE1BQU07QUFDVCxnQkFBSSxFQUFFLGlCQUFFLE1BQU07QUFDZCxvQkFBUSxFQUFFLGlCQUFFLElBQUk7QUFDaEIsaUJBQUssRUFBRSxpQkFBRSxNQUFNO0FBQ2YsZUFBRyxFQUFFLGlCQUFFLE1BQU07QUFDYixlQUFHLEVBQUUsaUJBQUUsTUFBTTtTQUNuQjs7OztlQUV3QjtBQUNsQixpQkFBSyxFQUFFLENBQUM7QUFDUixlQUFHLEVBQUUsQ0FBQztBQUNOLGVBQUcsRUFBRSxHQUFHO1NBQ1g7Ozs7V0FoQmdCLE1BQU07OztxQkFBTixNQUFNIiwiZmlsZSI6IlNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcbmltcG9ydCB7IFByb3BUeXBlcyBhcyBUIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5cbi8qKlxuICogQSB3cmFwcGVyIGZvciBhIHR5cGU9XCJzbGlkZXJcIiBpbnB1dCwgd2l0aCBsYWJlbCBhbmQgdW5pdFxuICogZGlzcGxheS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgcHJvcFR5cGVzID0ge1xuXHRcdGNsYXNzTmFtZTogVC5zdHJpbmcsXG5cdFx0bGFiZWw6IFQuc3RyaW5nLFxuICAgICAgICB1bml0OiBULnN0cmluZyxcbiAgICAgICAgb25DaGFuZ2U6IFQuZnVuYyxcbiAgICAgICAgdmFsdWU6IFQubnVtYmVyLFxuICAgICAgICBtaW46IFQubnVtYmVyLFxuICAgICAgICBtYXg6IFQubnVtYmVyLFxuXHR9XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICB9XG5cbiAgICBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y3goJ1NsaWRlcicsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiU2xpZGVyLUxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJTbGlkZXItQ29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICBtaW49e3RoaXMucHJvcHMubWlufSBtYXg9e3RoaXMucHJvcHMubWF4fVxuICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cblxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlNsaWRlci1WYWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX0ge3RoaXMucHJvcHMudW5pdH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICApO1xuICAgIH1cblxufVxuIl19