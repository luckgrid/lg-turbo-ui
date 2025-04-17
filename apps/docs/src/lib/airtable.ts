import Airtable from 'airtable';
import { env } from '@/lib/env';

// TODO:
// - create airtable package to share airtable actions and types between apps

if (!env.AIRTABLE_SECRET_API_TOKEN) {
  throw new Error('Unset AIRTABLE_SECRET_API_TOKEN environment variable');
}

const airtable = new Airtable({
  apiKey: env.AIRTABLE_SECRET_API_TOKEN,
});

const airtableBase = airtable.base(env.AIRTABLE_BASE_ID);

const airtableNewsletterSubsTable = airtableBase(
  env.AIRTABLE_NEWSLETTER_SUBS_TABLE_ID,
);

type AirtableError = Airtable.Error;

export { airtableBase, airtableNewsletterSubsTable };

export type { AirtableError };
