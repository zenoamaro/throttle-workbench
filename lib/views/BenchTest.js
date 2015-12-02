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

var _test = require('../../test');

/**
 * A test reporter that uses the home-made test harness
 * to display the results of the execution, function names,
 * source code, and perhaps any timeout that may have occurred.
 */

var BenchTest = (function (_Component) {
    _inherits(BenchTest, _Component);

    function BenchTest() {
        _classCallCheck(this, BenchTest);

        _get(Object.getPrototypeOf(BenchTest.prototype), 'constructor', this).apply(this, arguments);

        this.state = {
            err: null,
            runs: null
        };
    }

    _createClass(BenchTest, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this = this;

            // NOTE: React deprecated `isMounted()`, but seeing as we
            //       have no way to cancel a pending request here, it
            //       is necessary to use a flag in place.
            this._isMounted = true;

            (0, _test.runTests)(function (err, runs) {
                if (!_this._isMounted) return;
                _this.setState({ err: err, runs: runs });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'div',
                { className: 'BenchPanel-Test' },
                _react2['default'].createElement(
                    'div',
                    { className: 'BenchPanel-Test-Errors' },
                    this.state.runs === null ? 'Running...' : '',
                    this.state.err || ''
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'BenchPanel-Test-Results' },
                    this.state.runs ? this.state.runs.map(this.renderRun) : null
                )
            );
        }
    }, {
        key: 'renderRun',
        value: function renderRun(run, i) {
            return _react2['default'].createElement(
                'li',
                { className: 'BenchPanel-Test-Result',
                    'data-passed': run.passed, key: i },
                _react2['default'].createElement(
                    'div',
                    { className: 'BenchPanel-Test-Result-Info' },
                    _react2['default'].createElement(
                        'span',
                        { className: 'BenchPanel-Test-Result-Status' },
                        run.passed ? '✔' : '✘'
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'BenchPanel-Test-Result-Name' },
                        run.name
                    ),
                    _react2['default'].createElement(
                        'span',
                        { className: 'BenchPanel-Test-Result-Reason' },
                        run.reason
                    )
                ),
                _react2['default'].createElement(
                    'pre',
                    { className: 'BenchPanel-Test-Result-Source'
                    },
                    run.source
                )
            );
        }
    }]);

    return BenchTest;
})(_Component3['default']);

exports['default'] = BenchTest;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9CZW5jaFRlc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQWtCLE9BQU87Ozs7MEJBQ0gsYUFBYTs7OztvQkFDWixZQUFZOzs7Ozs7OztJQVFkLFNBQVM7Y0FBVCxTQUFTOzthQUFULFNBQVM7OEJBQVQsU0FBUzs7bUNBQVQsU0FBUzs7YUFFMUIsS0FBSyxHQUFHO0FBQ0osZUFBRyxFQUFFLElBQUk7QUFDVCxnQkFBSSxFQUFFLElBQUk7U0FDYjs7O2lCQUxnQixTQUFTOztlQU9SLDhCQUFHOzs7Ozs7QUFJakIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztBQUV2QixnQ0FBUyxVQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUs7QUFDcEIsb0JBQUksQ0FBQyxNQUFLLFVBQVUsRUFBRSxPQUFPO0FBQzdCLHNCQUFLLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBSCxHQUFHLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEMsQ0FBQyxDQUFDO1NBQ047OztlQUVtQixnQ0FBRztBQUNuQixnQkFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDM0I7OztlQUVLLGtCQUFHO0FBQ0wsbUJBQ0k7O2tCQUFLLFNBQVMsRUFBQyxpQkFBaUI7Z0JBQzVCOztzQkFBSyxTQUFTLEVBQUMsd0JBQXdCO29CQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUU7aUJBQ25CO2dCQUVOOztzQkFBSSxTQUFTLEVBQUMseUJBQXlCO29CQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FDVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUNuQyxJQUFJO2lCQUNUO2FBQ0gsQ0FDUjtTQUNMOzs7ZUFFUSxtQkFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO0FBQ2QsbUJBQ0k7O2tCQUFJLFNBQVMsRUFBQyx3QkFBd0I7QUFDbEMsbUNBQWEsR0FBRyxDQUFDLE1BQU0sQUFBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEFBQUM7Z0JBRWhDOztzQkFBSyxTQUFTLEVBQUMsNkJBQTZCO29CQUN4Qzs7MEJBQU0sU0FBUyxFQUFDLCtCQUErQjt3QkFDMUMsR0FBRyxDQUFDLE1BQU0sR0FBRSxHQUFHLEdBQUcsR0FBRztxQkFDbkI7b0JBQ1A7OzBCQUFNLFNBQVMsRUFBQyw2QkFBNkI7d0JBQ3hDLEdBQUcsQ0FBQyxJQUFJO3FCQUNOO29CQUNQOzswQkFBTSxTQUFTLEVBQUMsK0JBQStCO3dCQUMxQyxHQUFHLENBQUMsTUFBTTtxQkFDUjtpQkFDTDtnQkFFTjs7c0JBQUssU0FBUyxFQUFDLCtCQUErQjs7b0JBQ3hDLEdBQUcsQ0FBQyxNQUFNO2lCQUFPO2FBQ3RCLENBQ1A7U0FDTDs7O1dBN0RnQixTQUFTOzs7cUJBQVQsU0FBUyIsImZpbGUiOiJCZW5jaFRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5pbXBvcnQge3J1blRlc3RzfSBmcm9tICcuLi8uLi90ZXN0JztcblxuXG4vKipcbiAqIEEgdGVzdCByZXBvcnRlciB0aGF0IHVzZXMgdGhlIGhvbWUtbWFkZSB0ZXN0IGhhcm5lc3NcbiAqIHRvIGRpc3BsYXkgdGhlIHJlc3VsdHMgb2YgdGhlIGV4ZWN1dGlvbiwgZnVuY3Rpb24gbmFtZXMsXG4gKiBzb3VyY2UgY29kZSwgYW5kIHBlcmhhcHMgYW55IHRpbWVvdXQgdGhhdCBtYXkgaGF2ZSBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVuY2hUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBlcnI6IG51bGwsXG4gICAgICAgIHJ1bnM6IG51bGwsXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAvLyBOT1RFOiBSZWFjdCBkZXByZWNhdGVkIGBpc01vdW50ZWQoKWAsIGJ1dCBzZWVpbmcgYXMgd2VcbiAgICAgICAgLy8gICAgICAgaGF2ZSBubyB3YXkgdG8gY2FuY2VsIGEgcGVuZGluZyByZXF1ZXN0IGhlcmUsIGl0XG4gICAgICAgIC8vICAgICAgIGlzIG5lY2Vzc2FyeSB0byB1c2UgYSBmbGFnIGluIHBsYWNlLlxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJ1blRlc3RzKChlcnIsIHJ1bnMpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyLCBydW5zIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCZW5jaFBhbmVsLVRlc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJlbmNoUGFuZWwtVGVzdC1FcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucnVucyA9PT0gbnVsbCA/ICdSdW5uaW5nLi4uJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnIgfHwgJyd9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiQmVuY2hQYW5lbC1UZXN0LVJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucnVuc1xuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnN0YXRlLnJ1bnMubWFwKHRoaXMucmVuZGVyUnVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJSdW4ocnVuLCBpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiQmVuY2hQYW5lbC1UZXN0LVJlc3VsdFwiXG4gICAgICAgICAgICAgICAgZGF0YS1wYXNzZWQ9e3J1bi5wYXNzZWR9IGtleT17aX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJlbmNoUGFuZWwtVGVzdC1SZXN1bHQtSW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJCZW5jaFBhbmVsLVRlc3QtUmVzdWx0LVN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3J1bi5wYXNzZWQ/ICfinJQnIDogJ+KcmCd9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQmVuY2hQYW5lbC1UZXN0LVJlc3VsdC1OYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cnVuLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiQmVuY2hQYW5lbC1UZXN0LVJlc3VsdC1SZWFzb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtydW4ucmVhc29ufVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cIkJlbmNoUGFuZWwtVGVzdC1SZXN1bHQtU291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgPntydW4uc291cmNlfTwvcHJlPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==