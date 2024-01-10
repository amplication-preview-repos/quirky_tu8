import { EndUserWhereInput } from "./EndUserWhereInput";
import { EndUserOrderByInput } from "./EndUserOrderByInput";

export type EndUserFindManyArgs = {
  where?: EndUserWhereInput;
  orderBy?: Array<EndUserOrderByInput>;
  skip?: number;
  take?: number;
};
