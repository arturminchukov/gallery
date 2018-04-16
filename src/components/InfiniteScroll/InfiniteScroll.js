import * as React from 'react';
import '../../index.css';

const THRESHOLD = 600;


/*
 * Принимает следующие аттрибуты:
 *
 * fetchNext - функция которая подгружает содержимое,
 * в качестве примера для загрузки сообщений
 * this.fetchNext = this.props.dispatch.bind(this,fetchMessages(roomId));
 *
 * */
export class InfiniteScroll extends React.Component {

    state = {
        loading: false
    };

    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, { passive: true });
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    componentDidUpdate() {
        this.onScroll();
    }

    onScroll() {
        if (!this.container || this.state.loading || !this.props.next) {
            return;
        }
        let containerHeight = this.container.children && this.container.children[0] && this.container.children[0].clientHeight,
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > containerHeight - THRESHOLD) {
            this.nextPage();
        }
    }

    async nextPage() {
        this.setState({ loading: true });
        try {
            await this.props.fetchNext();
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const spinner = this.state.loading ? <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> : '';
        return (
            <div className="InfiniteScroll" ref={(container) => this.container = container}>
                {this.props.children}
                {spinner}
            </div>
        );
    }
}
