import React from 'react';

import * as S from './styles';

export type Props = {
  reverseColor?: boolean;
  lineBottom?: boolean;
  children: string;
};

const Heading = ({
  reverseColor = false,
  lineBottom = false,
  children
}: Props) => (
  <S.Wrapper reverseColor={reverseColor} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
);

export default Heading;
