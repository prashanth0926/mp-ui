import { styled, Container, List, ListItem, Card, ListItemText, Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import { LetterWriter } from '../LetterWriter';
import { DEFAULT_TIMEOUT_MILLI } from '../../utils/constants';
import { timeout } from '../../utils';

interface CMD {
  text: string;
  isCmd?: boolean;
  timeout?: number;
}

export const CommandLine = ({ rawCommands }: any) => {
  const [commands, setCommands] = useState<CMD[]>([]);
  const [hoverStatus, setHover] = useState<(undefined | boolean)[]>([]);
  const scrollRef = useRef<null | HTMLLIElement>(null);
  const textRefs = useRef<(null | HTMLElement)[]>([]);

  useEffect(() => {
    const update = async () => {
      let i = 0;

      if (rawCommands) {
        for (const c of rawCommands) {
          i++;
          setCommands((prev) => [...prev, c]);
          if (i < rawCommands.length - 1) {
            if (c.isCmd) {
              await timeout(c.text.length * (c.timeout || DEFAULT_TIMEOUT_MILLI) + 250);
            } else {
              await timeout((c.timeout || DEFAULT_TIMEOUT_MILLI) + 250);
            }
          }
        }
      }
    }

    update();
  }, [rawCommands]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [commands]);

  // useEffect(() => {
  //   console.log('tRefs: ', textRefs);
  //   if (textRefs) {
  //     textRefs.current.forEach((tRef, i) => {
  //       console.log('tRef: ', tRef);
  //       console.log('tRef width: ', tRef?.scrollWidth);
  //       console.log('tRef c width: ', tRef?.clientWidth);
  //       if (tRef && (tRef.scrollWidth > tRef.clientWidth)) {
  //         setHover(prev => {
  //           prev[i] = true;
  //           return [...prev];
  //         });
  //       }
  //     })
  //   }
  // }, [commands]);

  return (
    <List>
      {
        commands.map(({ text, isCmd, timeout }, i) => (
          <StyledListItem key={`${i}-list-item`}>
            {
              isCmd ? (
                <StyledListItemText>
                  {`>> `}<LetterWriter text={text} time={timeout || DEFAULT_TIMEOUT_MILLI} />
                </StyledListItemText>
              ) : (
                <Tooltip
                  title={text}
                  disableHoverListener={!hoverStatus[i]}
                >
                  <StyledListItemText ref={(el: HTMLElement) => textRefs.current.push(el)}>
                    {`>> ${text}`}
                  </StyledListItemText>
                </Tooltip>
              )
            }
          </StyledListItem>
        ))
      }
      <ListItem key="last-list-item" ref={scrollRef} />
    </List>
  );
};

const StyledListItem = styled(ListItem)(() => ({
  paddingTop: 0,
  paddingBottom: 0,
}));

const StyledListItemText = styled(ListItemText)(() => ({
  '& span': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));
