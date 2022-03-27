import { styled, Card, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { processCommands } from './api';
import { CommandLine } from '../../components/CommandLine';

interface CMD {
  text: string;
  isCmd?: boolean;
  timeout?: number;
}

export const CodeEditor = () => {
  const [commands, setCommands] = useState<CMD[]>([]);

  useEffect(() => {
    const update = async () => {
      const rawCommands: CMD[] | undefined = await processCommands();
      
      if (rawCommands) {
        setCommands(rawCommands);
      }
    }

    update();
  }, []);

  return (
    // <Container>
      <StyledCard>
        <CommandLine rawCommands={commands} />
      </StyledCard>
    // </Container>
  );
};

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
}));
