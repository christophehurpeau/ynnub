import React, { PureComponent } from 'react';
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
const calculatePercent = (percent: number) => {
  if (percent < 60) return percent + random() * 10 + 5;
  if (percent < 70) return percent + random() * 10 + 3;
  else if (percent < 80) return percent + random() + 5;
  else if (percent < 90) return percent + random() + 1;
  else if (percent < 95) return percent + 0.1;
  else return percent;
};

interface Props {
  hidden: boolean;
}

interface ProgressState {
  value: number;
  willChange: string | undefined;
}

interface LoadingBarState {
  prevHidden: boolean;
  containerStyle: any;
  progress: ProgressState;
}

const finalShownState = {
  prevHidden: false,
  containerStyle: {},
  progress: {
    value: 1,
    willChange: 'width',
  },
};

const finalHiddenState = {
  prevHidden: true,
  containerStyle: {
    display: 'none',
    willChange: 'display',
  },
  progress: {
    value: 1,
    willChange: undefined,
  },
};

export default class LoadingBar extends PureComponent<Props, LoadingBarState> {
  /* eslint-disable react/sort-comp */
  fadeOffTimeout?: any;

  resetTimeout?: any;

  first20Timeout?: any;

  progressTimer?: any;
  /* eslint-enable react/sort-comp */

  state = this.props.hidden ? finalHiddenState : finalShownState;

  static getDerivedStateFromProps(
    nextProps: Props,
    prevState: LoadingBarState,
  ) {
    if (nextProps.hidden !== prevState.prevHidden) {
      return nextProps.hidden
        ? {
            prevHidden: true,
            containerStyle: {
              willChange: 'height, opacity',
            },
            progress: {
              value: 100,
              willChange: undefined,
            },
          }
        : {
            prevHidden: false,
            containerStyle: {},
            progress: {
              value: 1,
              willChange: 'width',
            },
          };
    }

    return null;
  }

  componentDidMount(): void {
    if (!this.props.hidden) {
      this.showBar();
    }
  }

  componentDidUpdate(prevProps: Props, prevState: LoadingBarState) {
    if (prevState.prevHidden !== this.state.prevHidden) {
      if (this.props.hidden) {
        this.hideBar();
      } else {
        this.showBar();
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.fadeOffTimeout);
    clearTimeout(this.resetTimeout);
    clearTimeout(this.first20Timeout);
    clearInterval(this.progressTimer);
  }

  render() {
    return (
      <div
        hidden={this.props.hidden}
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
      </div>
    );
  }

  private showBar() {
    clearTimeout(this.fadeOffTimeout);
    clearTimeout(this.resetTimeout);

    this.first20Timeout = setTimeout(() => {
      this.setState({ progress: { value: 20, willChange: 'width' } });
    }, 100);

    this.progressTimer = setInterval(() => {
      this.setState((prevState) => {
        const newValue = calculatePercent(prevState.progress.value);
        return { progress: { value: newValue, willChange: 'width' } };
      });
    }, 500);
  }

  private hideBar() {
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
          willChange: undefined,
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
          willChange: undefined,
        },
      });
    }, 1000);
  }
}
