export const isOdd = (x: number): boolean => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

type TFigure = 'Pawn' | 'Rook' | 'Knight' | 'Bishop' | 'Queen' | 'King';

interface IExtractFigure {
  color: 'black' | 'white';
  figure: TFigure;
}

export const extractFigure = (number: number): IExtractFigure | undefined => {
  if (number === 0) {
    return;
  }
  const color = Math.floor(number / 10) === 1 ? 'black' : 'white';
  const figureNum = number % 10;

  const figures: TFigure[] = [
    'Pawn',
    'Rook',
    'Knight',
    'Bishop',
    'Queen',
    'King',
  ];

  return {
    color,
    figure: figures[figureNum],
  };
};
