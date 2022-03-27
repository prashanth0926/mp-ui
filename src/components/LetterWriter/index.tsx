import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { DEFAULT_TIMEOUT_MILLI } from '../../utils/constants';
import { timeout } from '../../utils';

interface Props {
  text: string;
  time?: number;
}

export const LetterWriter = ({ text, time = DEFAULT_TIMEOUT_MILLI }: Props) => {
  const [txt, setTxt] = useState('');

  useEffect(() => {
    const letters = text.split('');
    const update = async () => {
      for (const l of letters) {
        await timeout(time);
        setTxt((prev) => `${prev}${l}`);
      }
    }
    
    update();
  }, [text, time])
  
  return (
    <Typography component="span" color="textSecondary">
      {txt}
    </Typography>
  )
};
