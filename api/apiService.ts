import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const fetchCustomerCount = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${apiUrl}/customers/count`, {
      params: { start_date: startDate, end_date: endDate }
    });
    return response.data.total_customers;
  } catch (error) {
    console.error('Error fetching customer count:', error);
    throw error;
  }
};

export const fetchTransactionCount = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${apiUrl}/transactions/count`, {
      params: { start_date: startDate, end_date: endDate }
    });
    return response.data.total_transactions;
  } catch (error) {
    console.error('Error fetching transaction count:', error);
    throw error;
  }
};

export const fetchTransactionAmount = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${apiUrl}/transactions/amount`, {
      params: { start_date: startDate, end_date: endDate }
    });
    return response.data.sum_transactions;
  } catch (error) {
    console.error('Error fetching transaction amount:', error);
    throw error;
  }
};

export const fetchHighestVolumeDay = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${apiUrl}/highest_volume_day`, {
      params: { start_date: startDate, end_date: endDate }
    });
    return response.data.highest_volume_day;
  } catch (error) {
    console.error('Error fetching highest volume day:', error);
    throw error;
  }
};