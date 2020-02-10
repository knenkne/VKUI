import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

export type CardGridProps = HTMLAttributes<HTMLDivElement>;

const CardGrid: FunctionComponent<CardGridProps> = ({ children, className, style }: CardGridProps) => {
  const platform = usePlatform();

  return (
    <div style={style} className={classNames(className, getClassname('CardGrid', platform))}>
      {children}
    </div>
  );
};

export default CardGrid;
