import React from 'react';
import Component from './Component';
import CodePanel from './CodePanel';
import BenchPanel from './BenchPanel';


export default class Root extends Component {

    render() {
        return (
            <div className="Root">
                <CodePanel/>
                <BenchPanel/>
            </div>
        );
    }

}
