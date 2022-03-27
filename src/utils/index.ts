export const timeout = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const validURL = (str: string): boolean => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  return !!pattern.test(str);
}

export const fetchLocationQuerParams = (searchQuery: string) => {
  const qParams = decodeURI(searchQuery).substring(1).split('&');
  const query: any = {};

  qParams.forEach((q: string) => {
    const [key, value] = q.split('=');
    query[key] = value;
  });

  return query;
}

export const parseJSON = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}