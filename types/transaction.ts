export interface Transaction {
    id: string;
    legacy_id: string;
    amount_value: number;
    amount_currency: string;
    customer_id: string | null;
    status: string;
    created_at: string;
    merchant_id: string;
    merchant_account_id: string;
    merchant_name: string;
  }
  
  // You might also want to define some optional types for specific use cases:
  
  export type TransactionStatus = 'SETTLED' | 'SETTLING' | 'SUBMITTED_FOR_SETTLEMENT' | 'SETTLEMENT_CONFIRMED' | 'FAILED' | 'VOIDED' | 'REFUNDED';
  
  export interface TransactionSummary {
    id: string;
    amount_value: number;
    amount_currency: string;
    status: TransactionStatus;
    created_at: string;
  }
  
  export interface DailyTransactionTotal {
    date: string;
    total: number;
  }