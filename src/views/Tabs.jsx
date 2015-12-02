import React from 'react';
import Component from './Component';
import { PropTypes as T } from 'react';
import cx from 'classnames';


/**
 * A simple control displaying a tab-strip where only one tab
 * can be selected at once.
 */
export default class Tabs extends Component {

	static propTypes = {
		className: T.string,
		tabs: T.arrayOf(T.shape({
			id: T.string,
			label: T.string,
		})),
        selected: T.string,
        onChange: T.func,
	}

    static defaultProps = {
        tabs: [],
    }

    select = (tab) => {
        this.props.onChange(tab.id);
    }

    render() {
        return (
            <div className={cx('Tabs', this.props.className)}>
                {this.props.tabs.map(this.renderTab)}
            </div>
        );
    }

    renderTab = (tab) => {
        return (
            <a key={tab.id}
               className='Tabs-Tab'
               onClick={e => this.select(tab)}
               data-selected={tab.id === this.props.selected}>
                {tab.label}
            </a>
        );
    }

}
