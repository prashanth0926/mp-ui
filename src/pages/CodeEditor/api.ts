import axios from 'axios';
import { fetchLocationQuerParams, parseJSON, validURL } from '../../utils';
import { COMMANDS_API, COMMANDS_DATA, KEYS_API, KEYS_DATA } from '../../utils/constants';

export const fetchKeys = async (api: string = KEYS_API) => {
  const { data: keys } = await axios(api);

  return keys;
}

export const fetchRawCommands = async (api: string = COMMANDS_API) => {
  const { data: commands } = await axios(api);

  return commands;
}

export const processCommands = async (searchQuery?: string) => {
  try {
    let cmds: any[] = COMMANDS_DATA;
    let keys: any = KEYS_DATA;
    let rawCommands: any[] = [];
    const processData = async (init: Function, value?: string) => {
      if (value) {
        if (validURL(value)) {
          return init(value);
        } else {
          const json = parseJSON(value);
          
          if (json) {
            return json;
          } else {
            return init();
          }
        }
      } else {
        return init();
      }
    }

    try {
      if (searchQuery) {
        const queryParams = fetchLocationQuerParams(searchQuery);
  
        cmds = await processData(fetchRawCommands, queryParams['cmds']);
        keys = await processData(fetchKeys, queryParams['keys']);
      } else {
        cmds = await fetchRawCommands();
        keys = await fetchKeys();
      }
    } catch (error) {
      console.log('error fetching data', error);
    }

    console.log('cmds: ', cmds);
    console.log('keys: ', keys);

    cmds.forEach((cmd: any) => {
      if (cmd.key) {
        if (keys[cmd.key]) {
          if(Array.isArray(keys[cmd.key])) {
            keys[cmd.key].forEach((text: string) => {
              rawCommands = [
                ...rawCommands,
                {
                  text,
                  ...cmd,
                }
              ]  
            })
          } else {
            rawCommands = [
              ...rawCommands,
              {
                text: keys[cmd.key],
                ...cmd,
              }
            ]  
          }
        } else {
          rawCommands = [
            ...rawCommands,
            {
              text: `Failed to load data for ${(cmd.key || '').toUpperCase()}`,
              ...cmd,
            }
          ]
        }
      } else {
        rawCommands = [...rawCommands, cmd];
      }
    });

    return rawCommands;
  } catch (error) {
    console.log('error processing commands: ', error);
  }
}
