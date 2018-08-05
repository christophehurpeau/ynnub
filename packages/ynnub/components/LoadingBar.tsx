import { Component } from 'react';
import s from './loadingBar.scss';

/* number between 0 and 1 */
const random = () => Math.ceil(Math.random() * 100) / 100;

/**
 * around:
 * at 100ms 20%
 * at 1s 40%
 * at 2s 60%
 * at 3s 80%
 */
const calculatePercent = (percent) => {
  if (percent < 60) return percent + random() * 10 + 5;
  if (percent < 70) return percent + random() * 10 + 3;
  else if (percent < 80) return percent + random() + 5;
  else if (percent < 90) return percent + random() + 1;
  else if (percent < 95) return percent + 0.1;
  else return percent;
};

export default class LoadingBar extends Component {

  constructor(props) {
    super(props);
    this.state = this.calcState(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hidden === (this.state.containerStyle.display === 'none')) return;
    this.setState(this.calcState(nextProps));
  }

  componentWillUnmount() {
    clearTimeout(this.fadeOffTimeout);
    clearTimeout(this.resetTimeout);
    clearTimeout(this.first20Timeout);
    clearInterval(this.progressTimer);
  }

  calcState(props) {
    if (process.env.POB_TARGET === 'browser' && !props.hidden) {

      clearTimeout(this.fadeOffTimeout);
      clearTimeout(this.resetTimeout);

      if (process.env.POB_TARGET === 'browser') {
        this.first20Timeout = setTimeout(() => {
          this.setState({ progress: { value: 20, willChange: 'width' } });
        }, 100);

        this.progressTimer = setInterval(() => {
          const newValue = calculatePercent(this.state.progress.value);
          this.setState({ progress: { value: newValue, willChange: 'width' } });
        }, 500);
      }

      return {
        containerStyle: {
        },
        progress: {
          value: 1,
          willChange: 'width',
        }
      };
    }

    if (!this.state) {
      return {
        containerStyle: {
          display: 'none',
          willChange: 'display',
        },
        progress: {
          value: 1,
          willChange: '',
        },
      };
    } else {
      clearTimeout(this.first20Timeout);
      clearInterval(this.progressTimer);


      this.fadeOffTimeout = setTimeout(() => {
        this.setState({
          containerStyle: {
            height: 0,
            opacity: 0,
            willChange: 'display',
          },
          progress: {
            value: 100,
            willChange: '',
          },
        });
      }, 500);

      this.resetTimeout = setTimeout(() => {
        this.setState({
          containerStyle: {
            display: 'none',
            willChange: 'display',
          },
          progress: {
            value: 1,
            willChange: '',
          },
        });
      }, 1000);

      return {
        containerStyle: {
          willChange: 'height, opacity',
        },
        progress: {
          value: 100,
          willChange: '',
        },
      };
    }
  }

  render() {
    return <div
      className={s.loadingBar}
      style={this.state.containerStyle}
    >
        <div
          className={s.progress}
          style={{
            width: `${this.state.progress.value}%`,
            willChange: this.state.progress.willChange,
          }}
        />
      </div>;
  }
}
