import { checkError, client } from './client';

import React from 'react';

export async function getCountries() {
  const resp = await client.from('countries').select('*');
  return checkError(resp);
}
