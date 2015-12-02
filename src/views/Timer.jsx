import Component from './Component';
import { PropTypes as T } from 'react';

/**
 * A simple Timer component (just like the one in Visual Basic ;) that
 * uses React's lifecycle methods (yay) to clean up after itself.
 */
export default class Timer extends Component {

	static propTypes = {
        handler: T.func.isRequired,
		interval: T.number.isRequired,
	}

    componentDidMount() {
        this.start();
    }

    componentDidUpdate(prevProps, prevState) {
        const changed = prevProps.interval !== this.props.interval
                     || prevProps.handler !== this.props.handler;
        if (changed) {
            this.stop();
            this.start();
        }
    }

    componentWillUnmount() {
        this.stop();
    }

    start() {
        const {handler, interval} = this.props;
        const timer = setInterval(handler, interval);
        this.setState({ timer });
    }

    stop() {
        clearInterval(this.state.timer);
        this.setState({ timer:null });
    }

    render() {
        return false;
    }

}
