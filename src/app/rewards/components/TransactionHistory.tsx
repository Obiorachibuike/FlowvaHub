'use client';

import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useSupabaseUser } from '@/contexts/Provider';

type Transaction = {
  id: number;
  created_at: string;
  status: 'claimed' | 'pending';
  rewards: {
    title: string;
    cost_points: number;
  } | null;
};

export function TransactionHistory() {
  const { supabase, user } = useSupabaseUser();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchTransactions = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('user_rewards')
        .select(`
          id,
          created_at,
          status,
          rewards (
            title,
            cost_points
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching transactions:', error);
      } else {
        setTransactions(data as Transaction[]);
      }
      setLoading(false);
    };

    fetchTransactions();
  }, [supabase, user]);
  
  // Real-time updates for new transactions
  useEffect(() => {
    if (!user) return;
    
    const channel = supabase
      .channel('user-rewards-changes')
      .on<Transaction>(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_rewards',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
            // Because the payload.new doesn't include the joined `rewards` data,
            // we have to re-fetch the new row.
            const fetchNewTransaction = async () => {
                const { data, error } = await supabase
                    .from('user_rewards')
                    .select(`id, created_at, status, rewards (title, cost_points)`)
                    .eq('id', payload.new.id)
                    .single();
                
                if (!error && data) {
                    setTransactions(current => [data as Transaction, ...current].slice(0, 10));
                }
            }
            fetchNewTransaction();
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, user]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
        <CardDescription>A log of your most recent reward claims.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reward</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Points</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              [...Array(3)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-5 w-32" /></TableCell>
                  <TableCell className="text-center"><Skeleton className="h-5 w-20 mx-auto" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-5 w-16 ml-auto" /></TableCell>
                  <TableCell className="text-right"><Skeleton className="h-5 w-24 ml-auto" /></TableCell>
                </TableRow>
              ))
            ) : transactions.length > 0 ? (
              transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>
                    <div className="font-medium">{tx.rewards?.title ?? 'Unknown Reward'}</div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge variant={tx.status === 'claimed' ? 'default' : 'secondary'} className="capitalize">
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">-{tx.rewards?.cost_points.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    {format(parseISO(tx.created_at), 'MMM d, yyyy')}
                  </TableCell>
                </TableRow>
              ))
            ) : (
                <TableRow>
                    <TableCell colSpan={4} className="h-24 text-center">
                        You haven't claimed any rewards yet.
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
