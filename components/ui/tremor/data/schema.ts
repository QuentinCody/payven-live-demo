export type Transaction = {
  id: string;
  customer_id: string | null;  // Allow null for customer_id
  amount_value: number;
  amount_currency: string;
  status: string;
  payment_method: string;
  created_at: string;
  merchant_id: string;
  merchant_account_id: string;
  merchant_name: string;
}

export type Customer = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  created_at: string;
}

export type TransactionWithCustomer = Transaction & {
  customer: string | null;  // Allow null for customer
}