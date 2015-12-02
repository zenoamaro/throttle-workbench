import React from 'react';
import Component from './Component';
import Highlight from 'react-highlight';
import sourceCode from '!!raw!../throttle.js';


export default class CodePanel extends Component {

    render() {
        return (
            <div className="CodePanel">
                <Highlight className='CodePanel-Source js'>
                    {sourceCode}
                </Highlight>
            </div>
        );
    }

}
