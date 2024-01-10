import { EndUser as TEndUser } from "../api/endUser/EndUser";

export const ENDUSER_TITLE_FIELD = "id";

export const EndUserTitle = (record: TEndUser): string => {
  return record.id?.toString() || String(record.id);
};
