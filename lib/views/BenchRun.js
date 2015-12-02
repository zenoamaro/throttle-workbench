'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _throttle = require('throttle');

/**
 * A simple runner for the throttling function, that allows
 * rapid practical testing by allowing the user to vary the
 * frequency with ease.
 */

var BenchRun = (function (_Component) {
    _inherits(BenchRun, _Component);

    function BenchRun() {
        var _this = this;

        _classCallCheck(this, BenchRun);

        _get(Object.getPrototypeOf(BenchRun.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            frequency: 1,
            lastExecution: null,
            log: []
        };

        this.handler = function () {
            var now = Date.now();

            if (_this.state.lastExecution !== null) {
                var elapsed = now - _this.state.lastExecution;
                var msg = 'Time since last call: ' + elapsed + ' ms';
            } else {
                msg = 'Starting with frequency: ' + _this.state.frequency + ' Hz';
            }

            var log = [msg].concat(_toConsumableArray(_this.state.log.slice(0, 20)));
            _this.setState({ lastExecution: now, log: log });
        };

        this.onSliderChange = function (value) {
            _this.setState({ frequency: value });
        };
    }

    _createClass(BenchRun, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.createHandler(this.state.frequency);
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {
            if (nextState.frequency !== this.state.frequency) {
                this.createHandler(nextState.frequency);
            }
        }
    }, {
        key: 'createHandler',
        value: function createHandler(frequency) {
            var handler = (0, _throttle.throttleFreq)(frequency, this.handler);
            this.setState(function () {
                return { lastExecution: null, handler: handler };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'BenchPanel-Run' },
                _react2['default'].createElement(_Slider2['default'], {
                    label: 'Frequency',
                    unit: 'Hz',
                    min: 1, max: 32,
                    value: this.state.frequency,
                    onChange: this.onSliderChange
                }),
                _react2['default'].createElement(_Timer2['default'], {
                    interval: 0,
                    handler: this.state.handler
                }),
                _react2['default'].createElement(
                    'pre',
                    { className: 'BenchPanel-Run-Log' },
                    this.state.log.join('\n')
                )
            );
        }
    }]);

    return BenchRun;
})(_Component3['default']);

exports['default'] = BenchRun;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9CZW5jaFJ1bi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7OzBCQUNILGFBQWE7Ozs7c0JBQ2hCLFVBQVU7Ozs7cUJBQ1gsU0FBUzs7Ozt3QkFDQSxVQUFVOzs7Ozs7OztJQVFoQixRQUFRO2NBQVIsUUFBUTs7YUFBUixRQUFROzs7OEJBQVIsUUFBUTs7bUNBQVIsUUFBUTs7YUFFekIsS0FBSyxHQUFHO0FBQ0oscUJBQVMsRUFBRSxDQUFDO0FBQ1oseUJBQWEsRUFBRSxJQUFJO0FBQ25CLGVBQUcsRUFBRSxFQUFFO1NBQ1Y7O2FBaUJELE9BQU8sR0FBRyxZQUFNO0FBQ1osZ0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7QUFFdkIsZ0JBQUksTUFBSyxLQUFLLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtBQUNuQyxvQkFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLE1BQUssS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUMvQyxvQkFBSSxHQUFHLDhCQUE0QixPQUFPLFFBQUssQ0FBQzthQUNuRCxNQUFNO0FBQ0gsbUJBQUcsaUNBQStCLE1BQUssS0FBSyxDQUFDLFNBQVMsUUFBSyxDQUFDO2FBQy9EOztBQUVELGdCQUFNLEdBQUcsSUFBSSxHQUFHLDRCQUFLLE1BQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLENBQUM7QUFDbEQsa0JBQUssUUFBUSxDQUFDLEVBQUUsYUFBYSxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUgsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM3Qzs7YUFFRCxjQUFjLEdBQUcsVUFBQyxLQUFLLEVBQUs7QUFDeEIsa0JBQUssUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDdkM7OztpQkF2Q2dCLFFBQVE7O2VBUVAsOEJBQUc7QUFDakIsZ0JBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1Qzs7O2VBRWtCLDZCQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUU7QUFDdEMsZ0JBQUksU0FBUyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUM5QyxvQkFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0M7U0FDSjs7O2VBRVksdUJBQUMsU0FBUyxFQUFFO0FBQ3JCLGdCQUFNLE9BQU8sR0FBRyw0QkFBYSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELGdCQUFJLENBQUMsUUFBUSxDQUFDO3VCQUFPLEVBQUUsYUFBYSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQVAsT0FBTyxFQUFFO2FBQUMsQ0FBQyxDQUFDO1NBQzFEOzs7ZUFvQkssa0JBQUc7QUFDTCxtQkFDSTs7a0JBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFDM0I7QUFDSSx5QkFBSyxFQUFDLFdBQVc7QUFDakIsd0JBQUksRUFBQyxJQUFJO0FBQ1QsdUJBQUcsRUFBRSxDQUFDLEFBQUMsRUFBQyxHQUFHLEVBQUUsRUFBRSxBQUFDO0FBQ2hCLHlCQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEFBQUM7QUFDNUIsNEJBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxBQUFDO2tCQUNoQztnQkFFRjtBQUNJLDRCQUFRLEVBQUUsQ0FBQyxBQUFDO0FBQ1osMkJBQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQUFBQztrQkFDOUI7Z0JBRUY7O3NCQUFLLFNBQVMsRUFBQyxvQkFBb0I7b0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3hCO2FBQ0osQ0FDUjtTQUNMOzs7V0E5RGdCLFFBQVE7OztxQkFBUixRQUFRIiwiZmlsZSI6IkJlbmNoUnVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcic7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQge3Rocm90dGxlRnJlcX0gZnJvbSAndGhyb3R0bGUnO1xuXG5cbi8qKlxuICogQSBzaW1wbGUgcnVubmVyIGZvciB0aGUgdGhyb3R0bGluZyBmdW5jdGlvbiwgdGhhdCBhbGxvd3NcbiAqIHJhcGlkIHByYWN0aWNhbCB0ZXN0aW5nIGJ5IGFsbG93aW5nIHRoZSB1c2VyIHRvIHZhcnkgdGhlXG4gKiBmcmVxdWVuY3kgd2l0aCBlYXNlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZW5jaFJ1biBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZnJlcXVlbmN5OiAxLFxuICAgICAgICBsYXN0RXhlY3V0aW9uOiBudWxsLFxuICAgICAgICBsb2c6IFtdLFxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVIYW5kbGVyKHRoaXMuc3RhdGUuZnJlcXVlbmN5KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChuZXh0U3RhdGUuZnJlcXVlbmN5ICE9PSB0aGlzLnN0YXRlLmZyZXF1ZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVIYW5kbGVyKG5leHRTdGF0ZS5mcmVxdWVuY3kpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlSGFuZGxlcihmcmVxdWVuY3kpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHRocm90dGxlRnJlcShmcmVxdWVuY3ksIHRoaXMuaGFuZGxlcik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHsgbGFzdEV4ZWN1dGlvbjpudWxsLCBoYW5kbGVyIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxhc3RFeGVjdXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSB0aGlzLnN0YXRlLmxhc3RFeGVjdXRpb247XG4gICAgICAgICAgICB2YXIgbXNnID0gYFRpbWUgc2luY2UgbGFzdCBjYWxsOiAke2VsYXBzZWR9IG1zYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1zZyA9IGBTdGFydGluZyB3aXRoIGZyZXF1ZW5jeTogJHt0aGlzLnN0YXRlLmZyZXF1ZW5jeX0gSHpgO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbG9nID0gW21zZywgLi4udGhpcy5zdGF0ZS5sb2cuc2xpY2UoMCwgMjApXTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3RFeGVjdXRpb246bm93LCBsb2cgfSk7XG4gICAgfVxuXG4gICAgb25TbGlkZXJDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZyZXF1ZW5jeTogdmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCZW5jaFBhbmVsLVJ1blwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGcmVxdWVuY3lcIlxuICAgICAgICAgICAgICAgICAgICB1bml0PVwiSHpcIlxuICAgICAgICAgICAgICAgICAgICBtaW49ezF9IG1heD17MzJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZyZXF1ZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TbGlkZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxUaW1lclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbD17MH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcj17dGhpcy5zdGF0ZS5oYW5kbGVyfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIkJlbmNoUGFuZWwtUnVuLUxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2cuam9pbignXFxuJyl9XG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==