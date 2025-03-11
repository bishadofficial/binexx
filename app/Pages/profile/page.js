'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { X } from 'lucide-react';
import LogoutButton from '@/components/LogoutButton';

export default function AccountPage() {
  const [profits, setProfits] = useState([]);
  const [newProfit, setNewProfit] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addProfit = () => {
    if (newProfit.trim() !== '') {
      setProfits([...profits, parseFloat(newProfit)]);
      setNewProfit('');
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addProfit();
    }
  };

  const deleteProfit = (index) => {
    setProfits(profits.filter((_, i) => i !== index));
  };

  const resetProfits = () => {
    setProfits([]);
  };

  const totalProfit = profits.reduce((acc, curr) => acc + curr, 0).toFixed(2);

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-6">
      <div className="w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold tracking-wider">ACCOUNT</h1>
          <LogoutButton/>
        </div>
        <Card className="p-5 bg-[#121212] text-center rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-3xl font-semibold text-red-500">${totalProfit}</h2>
          <div className="mt-4 flex justify-center gap-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-xl text-white">Add Profit</Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-700">
                <DialogTitle className="text-white text-lg font-semibold">Add Profit</DialogTitle>
                <Input
                  type="number"
                  className="mt-3 p-3 rounded-lg bg-[#222] text-white border border-gray-600"
                  placeholder="Enter profit"
                  value={newProfit}
                  onChange={(e) => setNewProfit(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <Button className="mt-4 bg-green-500 hover:bg-green-600 w-full py-2 rounded-xl text-white" onClick={addProfit}>Add</Button>
              </DialogContent>
            </Dialog>
            <Button className="bg-gray-800 hover:bg-gray-900 px-6 py-2 rounded-xl text-white" onClick={resetProfits}>RESET</Button>
          </div>
        </Card>
        <div className="mt-6">
          <Card className="p-5 bg-[#121212] rounded-2xl shadow-xl border border-gray-800">
            <h3 className="text-lg font-semibold mb-4">Profit History</h3>
            <Table className="w-full text-white">
              <TableHeader>
                <TableRow className="border-b border-gray-700">
                  <TableHead>#</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {profits.length > 0 ? profits.map((profit, index) => (
                  <TableRow key={index} className="border-b border-gray-800">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="text-red-500 font-semibold">${profit.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button className="bg-red-500 hover:bg-red-600 p-1 rounded-xl" size="icon" onClick={() => deleteProfit(index)}>
                        <X size={16} />
                      </Button>
                    </TableCell>
                  </TableRow>
                )) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-3 text-gray-400">No profits added yet</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="mt-4 text-right text-xl font-bold text-red-500">Total: ${totalProfit}</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
