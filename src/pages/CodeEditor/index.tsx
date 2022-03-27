import { styled, Card, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import { processCommands } from './api';
import { CommandLine } from '../../components/CommandLine';
import { useLocation } from 'react-router-dom';

interface CMD {
  text: string;
  isCmd?: boolean;
  timeout?: number;
}

export const CodeEditor = () => {
  const [commands, setCommands] = useState<CMD[]>([]);
  const location = useLocation();

  useEffect(() => {
    const update = async () => {
      const rawCommands: CMD[] | undefined = await processCommands(location?.search);
      
      if (rawCommands) {
        setCommands(rawCommands);
      }
    }

    update();
  }, [location.search]);

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
