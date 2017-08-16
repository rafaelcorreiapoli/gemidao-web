import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  padding: 20px;
`;

export default () => (
  <Wrapper zDepth={1}>
    <ul>
      <li>
        As chamadas não atendidas pela vítima serão cobradas da mesma maneira, pois nestes casos a secretária eletrônica é quem "atende" a ligação, gerando custos de telefonia.
      </li>
      <li>
        Você é responsável pela brincadeira.
      </li>
    </ul>
  </Wrapper>
);
