import { FC, useEffect, useRef, useState } from 'react';
import { ITimerProps } from './timer.props';
import { Colors } from '../../models/types';

const Timer: FC<ITimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);
  const decrementBlackTimer = () => {
    setBlackTime(prev => prev - 1);
  };

  const decrementWhiteTimer = () => {
    setWhiteTime(prev => prev - 1);
  };

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

      const cb = currentPlayer?.color === Colors.WHITE
      ? decrementWhiteTimer
      : decrementBlackTimer;

    timer.current = setInterval(cb, 1000);
  };

  const handleRestart = () => {
    setWhiteTime(300);
    setBlackTime(300);
    restart();
  }

  useEffect(() => {
    setWhiteTime(300);
    setBlackTime(300);
    startTimer()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer]);

  return(
    <div>
      <div>
        <button
          type='button'
          onClick={handleRestart}
        >
          Restart game
        </button>
      </div>
      <h2>Черные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </div>
  );
}

export default Timer;
