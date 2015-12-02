import React from 'react';
import Component from './Component';
import Slider from './Slider';
import Timer from './Timer';
import {throttleFreq} from 'throttle';


/**
 * A simple runner for the throttling function, that allows
 * rapid practical testing by allowing the user to vary the
 * frequency with ease.
 */
export default class BenchRun extends Component {

    state = {
        frequency: 1,
        lastExecution: null,
        log: [],
    }

    componentWillMount() {
        this.createHandler(this.state.frequency);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.frequency !== this.state.frequency) {
            this.createHandler(nextState.frequency);
        }
    }

    createHandler(frequency) {
        const handler = throttleFreq(frequency, this.handler);
        this.setState(() => ({ lastExecution:null, handler }));
    }

    handler = () => {
        const now = Date.now();

        if (this.state.lastExecution !== null) {
            const elapsed = now - this.state.lastExecution;
            var msg = `Time since last call: ${elapsed} ms`;
        } else {
            msg = `Starting with frequency: ${this.state.frequency} Hz`;
        }

        const log = [msg, ...this.state.log.slice(0, 20)];
        this.setState({ lastExecution:now, log });
    }

    onSliderChange = (value) => {
        this.setState({ frequency: value });
    }

    render() {
        return (
            <div className="BenchPanel-Run">
                <Slider
                    label="Frequency"
                    unit="Hz"
                    min={1} max={32}
                    value={this.state.frequency}
                    onChange={this.onSliderChange}
                />

                <Timer
                    interval={0}
                    handler={this.state.handler}
                />

                <pre className="BenchPanel-Run-Log">
                    {this.state.log.join('\n')}
                </pre>
            </div>
        );
    }

}
