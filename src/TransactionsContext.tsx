import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

// Copia a interface de Transactions mas omite o id e createdAt
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransasctionsContextData {
    transactions: Transaction[];
    createTransaction: (Transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransasctionsContextData>(
    {} as TransasctionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}