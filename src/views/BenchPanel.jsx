import React from 'react';
import Component from './Component';
import BenchRun from './BenchRun';
import BenchTest from './BenchTest';
import Tabs from './Tabs';


/**
 * A container for the "Run" and "Test" sub-panels.
 */
export default class BenchPanel extends Component {

    state = {
        tab: 'run',
    }

    onTabChange = (id) => {
        this.setState({ tab: id });
    }

    render() {
        return (
            <div className="BenchPanel">
                <Tabs
                    className="BenchPanel-Tabs"
                    tabs={[
                        { id:'run', label:'Run' },
                        { id:'test', label:'Test' },
                    ]}
                    selected={this.state.tab}
                    onChange={this.onTabChange}
                />

                {this.state.tab === 'run' && <BenchRun/>}
                {this.state.tab === 'test' && <BenchTest/>}
            </div>
        );
    }

}
