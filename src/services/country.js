import { checkError, client } from './client';

export async function getCountries() {
  const resp = await client.from('countries').select('*');
  console.log(resp);
  return checkError(resp);
}
