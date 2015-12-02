import React from 'react';
import Component from './Component';
import { PropTypes as T } from 'react';
import cx from 'classnames';


/**
 * A wrapper for a type="slider" input, with label and unit
 * display.
 */
export default class Slider extends Component {

	static propTypes = {
		className: T.string,
		label: T.string,
        unit: T.string,
        onChange: T.func,
        value: T.number,
        min: T.number,
        max: T.number,
	}

    static defaultProps = {
        value: 0,
        min: 0,
        max: 100,
    }

    onChange = (event) => {
        var value = parseInt(event.target.value, 10);
        this.props.onChange(value);
    }

    render() {
        return (
            <label className={cx('Slider', this.props.className)}>
                <span className="Slider-Label">
                    {this.props.label}
                </span>

                <input className="Slider-Control"
                       type="range" value={this.props.value}
                       min={this.props.min} max={this.props.max}
                       value={this.props.value} onChange={this.onChange}/>

                <span className="Slider-Value">
                    {this.props.value} {this.props.unit}
                </span>
            </label>
        );
    }

}
