import Airtable from "airtable";

// TODO:
// - create airtable package to share airtable actions and types between apps

if (!process.env.AIRTABLE_SECRET_API_TOKEN) {
  throw new Error("Unset AIRTABLE_SECRET_API_TOKEN environment variable");
}

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_SECRET_API_TOKEN,
});

const airtableBase = airtable.base(
  process.env.AIRTABLE_BASE_ID || "appqEYgJYeJORBpAy",
);

const airtableNewsletterSubsTable = airtableBase(
  process.env.AIRTABLE_NEWSLETTER_SUBS_TABLE_ID || "tblvy8WQzDUNNvJTz",
);

type AirtableError = Airtable.Error;

export { airtableBase, airtableNewsletterSubsTable };

export type { AirtableError };
