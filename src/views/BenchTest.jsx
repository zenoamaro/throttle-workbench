import React from 'react';
import Component from './Component';
import {runTests} from '../../test';


/**
 * A test reporter that uses the home-made test harness
 * to display the results of the execution, function names,
 * source code, and perhaps any timeout that may have occurred.
 */
export default class BenchTest extends Component {

    state = {
        err: null,
        runs: null,
    }

    componentWillMount() {
        // NOTE: React deprecated `isMounted()`, but seeing as we
        //       have no way to cancel a pending request here, it
        //       is necessary to use a flag in place.
        this._isMounted = true;

        runTests((err, runs) => {
            if (!this._isMounted) return;
            this.setState({ err, runs });
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="BenchPanel-Test">
                <div className="BenchPanel-Test-Errors">
                    {this.state.runs === null ? 'Running...' : ''}
                    {this.state.err || ''}
                </div>

                <ul className="BenchPanel-Test-Results">
                    {this.state.runs
                        ? this.state.runs.map(this.renderRun)
                        : null}
                </ul>
            </div>
        );
    }

    renderRun(run, i) {
        return (
            <li className="BenchPanel-Test-Result"
                data-passed={run.passed} key={i}>

                <div className="BenchPanel-Test-Result-Info">
                    <span className="BenchPanel-Test-Result-Status">
                        {run.passed? '✔' : '✘'}
                    </span>
                    <span className="BenchPanel-Test-Result-Name">
                        {run.name}
                    </span>
                    <span className="BenchPanel-Test-Result-Reason">
                        {run.reason}
                    </span>
                </div>

                <pre className="BenchPanel-Test-Result-Source"
                    >{run.source}</pre>
            </li>
        );
    }

}
