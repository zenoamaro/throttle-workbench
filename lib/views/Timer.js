'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _react = require('react');

/**
 * A simple Timer component (just like the one in Visual Basic ;) that
 * uses React's lifecycle methods (yay) to clean up after itself.
 */

var Timer = (function (_Component) {
    _inherits(Timer, _Component);

    function Timer() {
        _classCallCheck(this, Timer);

        _get(Object.getPrototypeOf(Timer.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.start();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var changed = prevProps.interval !== this.props.interval || prevProps.handler !== this.props.handler;
            if (changed) {
                this.stop();
                this.start();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.stop();
        }
    }, {
        key: 'start',
        value: function start() {
            var _props = this.props;
            var handler = _props.handler;
            var interval = _props.interval;

            var timer = setInterval(handler, interval);
            this.setState({ timer: timer });
        }
    }, {
        key: 'stop',
        value: function stop() {
            clearInterval(this.state.timer);
            this.setState({ timer: null });
        }
    }, {
        key: 'render',
        value: function render() {
            return false;
        }
    }], [{
        key: 'propTypes',
        value: {
            handler: _react.PropTypes.func.isRequired,
            interval: _react.PropTypes.number.isRequired
        },
        enumerable: true
    }]);

    return Timer;
})(_Component3['default']);

exports['default'] = Timer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9UaW1lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzswQkFBc0IsYUFBYTs7OztxQkFDSixPQUFPOzs7Ozs7O0lBTWpCLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7bUNBQUwsS0FBSzs7O2lCQUFMLEtBQUs7O2VBT0wsNkJBQUc7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjs7O2VBRWlCLDRCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDckMsZ0JBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQzFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDekQsZ0JBQUksT0FBTyxFQUFFO0FBQ1Qsb0JBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLG9CQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDaEI7U0FDSjs7O2VBRW1CLGdDQUFHO0FBQ25CLGdCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjs7O2VBRUksaUJBQUc7eUJBQ3dCLElBQUksQ0FBQyxLQUFLO2dCQUEvQixPQUFPLFVBQVAsT0FBTztnQkFBRSxRQUFRLFVBQVIsUUFBUTs7QUFDeEIsZ0JBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDN0MsZ0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUM1Qjs7O2VBRUcsZ0JBQUc7QUFDSCx5QkFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsZ0JBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNqQzs7O2VBRUssa0JBQUc7QUFDTCxtQkFBTyxLQUFLLENBQUM7U0FDaEI7OztlQW5DZTtBQUNaLG1CQUFPLEVBQUUsaUJBQUUsSUFBSSxDQUFDLFVBQVU7QUFDaEMsb0JBQVEsRUFBRSxpQkFBRSxNQUFNLENBQUMsVUFBVTtTQUM3Qjs7OztXQUxtQixLQUFLOzs7cUJBQUwsS0FBSyIsImZpbGUiOiJUaW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIGFzIFQgfSBmcm9tICdyZWFjdCc7XG5cbi8qKlxuICogQSBzaW1wbGUgVGltZXIgY29tcG9uZW50IChqdXN0IGxpa2UgdGhlIG9uZSBpbiBWaXN1YWwgQmFzaWMgOykgdGhhdFxuICogdXNlcyBSZWFjdCdzIGxpZmVjeWNsZSBtZXRob2RzICh5YXkpIHRvIGNsZWFuIHVwIGFmdGVyIGl0c2VsZi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGhhbmRsZXI6IFQuZnVuYy5pc1JlcXVpcmVkLFxuXHRcdGludGVydmFsOiBULm51bWJlci5pc1JlcXVpcmVkLFxuXHR9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICBjb25zdCBjaGFuZ2VkID0gcHJldlByb3BzLmludGVydmFsICE9PSB0aGlzLnByb3BzLmludGVydmFsXG4gICAgICAgICAgICAgICAgICAgICB8fCBwcmV2UHJvcHMuaGFuZGxlciAhPT0gdGhpcy5wcm9wcy5oYW5kbGVyO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHtoYW5kbGVyLCBpbnRlcnZhbH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKGhhbmRsZXIsIGludGVydmFsKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVyIH0pO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS50aW1lcik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lcjpudWxsIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxufVxuIl19