// export type Usage = {
//   owner: string
//   status: string
//   costs: number
//   region: string
//   stability: number
//   lastEdited: string
// }

export type OverviewData = {
  date: string
  "Rows written": number
  "Rows read": number
  Queries: number
  "Payments completed": number
  "Sign ups": number
  Logins: number
  "Sign outs": number
  "Support calls": number
}


export type Transaction = {
  customer: string;
  type: string;
  amount_value: number;
  amount_currency: string;
  status: string;
  payment_method: string;
  created_at: string;
  id: string;

}