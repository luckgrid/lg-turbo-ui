import Airtable from "airtable";

// TODO:
// - add envSchema with common env variables using zod with a parse(process.env) function
// -- apps should have their own env schemas to extend the common airtable env schema and override values as needed
// -- airtable service methods should be able to reference env variables from app as long as this package is a dependency of the app

type AirtableOptions = {
  apiKey: string;
  baseId: string;
  tableId: string;
};

function airtable({ apiKey, baseId, tableId }: AirtableOptions) {
  const airtable = new Airtable({ apiKey });
  const base = airtable.base(baseId);
  const table = base(tableId);

  return table;
}

export { airtable };
