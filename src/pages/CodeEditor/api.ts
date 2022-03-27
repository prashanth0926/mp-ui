import axios from 'axios';
import { fetchLocationQuerParams, parseJSON, validURL } from '../../utils';
import { COMMANDS_API, COMMANDS_DATA, RESUME_API, RESUME_DATA } from '../../utils/constants';

export const fetchResume = async (api: string = RESUME_API) => {
  const { data: resume } = await axios(api);

  return resume;
}

export const fetchRawCommands = async (api: string = COMMANDS_API) => {
  const { data: commands } = await axios(api);

  return commands;
}

export const processCommands = async (searchQuery?: string) => {
  try {
    let cmds: any[] = COMMANDS_DATA;
    let resume: any = RESUME_DATA;
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
        resume = await processData(fetchResume, queryParams['resume']);
      } else {
        cmds = await fetchRawCommands();
        resume = await fetchResume();
      }
    } catch (error) {
      console.log('error fetching data', error);
    }

    console.log('cmds: ', cmds);
    console.log('resume: ', resume);

    cmds.forEach((cmd: any) => {
      if (cmd.key) {
        if (resume[cmd.key]) {
          if(Array.isArray(resume[cmd.key])) {
            resume[cmd.key].forEach((text: string) => {
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
                text: resume[cmd.key],
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
