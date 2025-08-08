"use client";
import { transactions } from "@/data";
import { Transaction } from "@/types";
import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import StatusBadge from "../ui/StatusBadge";
import { useSearch } from "@/context/SearchContext";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import CustomSheet from "../CustomSheet";

const TransactionTable = () => {
  const [data, setData] = useState<Transaction[]>(transactions);
  const [sortAsc, setSortAsc] = useState(true);
  const { searchQuery } = useSearch();

  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) =>
      sortAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setData(sorted);
    setSortAsc(!sortAsc);
  };

  // Filter transaction based on search query
  const filteredTransaction = useMemo(() => {
    if (!searchQuery.trim()) return data;

    const lowerCaseQuery = searchQuery.toLocaleLowerCase();

    return data.filter(
      (tx: Transaction) =>
        tx.date.toLocaleLowerCase().includes(lowerCaseQuery) ||
        tx.remark.toLocaleLowerCase().includes(lowerCaseQuery) ||
        tx.type.toLocaleLowerCase().includes(lowerCaseQuery) ||
        tx.currency.toLocaleLowerCase().includes(lowerCaseQuery)
    );
  }, [searchQuery, data]);

  const openTransactionDetails = (tx: Transaction) => {
    setSelectedTransaction(tx);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="overflow-auto hide-scrollbar">
        <Table>
          <TableHeader>
            <TableRow className="text-secondary-black border-b w-full">
              <TableHead className="text-secondary-black font-medium text-[13px]  w-[555px] min-w-[200px] px-0">
                <Button
                  onClick={sortByDate}
                  className="p-0 text-left bg-inherit hover:bg-inherit text-secondary-black font-medium text-[13px] cursor-pointer"
                >
                  Date{" "}
                  {sortAsc ? (
                    <FaCaretDown className="ml-0 h-4 w-4" />
                  ) : (
                    <FaCaretUp className="ml-0 h-4 w-4" />
                  )}
                </Button>
              </TableHead>
              <TableHead className="text-secondary-black font-medium text-[13px] max-w-[122px] min-w-[250px] px-0  ">
                <span className="flex items-center">
                  Remark <FaCaretDown className="ml-1 h-4 w-4" />
                </span>
              </TableHead>
              <TableHead className="text-secondary-black font-medium text-[13px] max-w-[73px] min-w-[150px] px-0  ">
                <span className="flex items-center">
                  {" "}
                  Amount <FaCaretDown className="ml-1 h-4 w-4" />
                </span>
              </TableHead>
              <TableHead className="text-secondary-black font-medium text-[13px]  max-w-[80px] min-w-[100px] px-0">
                <span className="flex items-center">
                  Currency <FaCaretDown className="ml-1 h-4 w-4" />
                </span>
              </TableHead>
              <TableHead className="text-secondary-black font-medium text-[13px] max-w-[74px] min-w-[70px] px-0   ">
                <span className="flex items-center">
                  Type <FaCaretDown className="ml-1 h-4 w-4" />
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransaction.length > 0 ? (
              filteredTransaction.map((tx, idx) => (
                <TableRow
                  key={idx}
                  className="border-b cursor-pointer w-full"
                  onClick={() => openTransactionDetails(tx)}
                >
                  <TableCell className="text-primary-black text-[15px] font-normal leading-5 -tracking-[0.5] p-[18px]  w-[555px] min-w-[200px] px-0">
                    {tx.date}
                  </TableCell>
                  <TableCell className="text-primary-black text-[15px] font-normal leading-5 -tracking-[0.5] p-[18px] max-w-[122px] min-w-[250px] px-0   truncate">
                    {tx.remark}
                  </TableCell>
                  <TableCell className="text-primary-black text-[15px] font-normal leading-5 -tracking-[0.5] p-[18px] max-w-[73px] min-w-[150px] px-0  ">
                    {tx.amount.toLocaleString("en-US", {
                      style: "currency",
                      currency: tx.currency,
                    })}
                  </TableCell>
                  <TableCell className="text-primary-black text-[15px] font-normal leading-5 -tracking-[0.5] p-[18px] max-w-[80px] min-w-[100px] px-0  ">
                    {tx.currency}
                  </TableCell>
                  <TableCell className="flex items-center gap-2 max-w-[74px] min-w-[70px] px-0  ">
                    <StatusBadge
                      title={tx.type}
                      dotColor={
                        tx.type === "Credit"
                          ? "bg-active-green"
                          : "bg-active-red"
                      }
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-6 text-secondary-black text-sm"
                >
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* sheet to display transaction details when a transaction is clicked */}
      <CustomSheet
        title="Transaction Details"
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
      >
        {selectedTransaction && (
          <div className="mt-4 space-y-2">
            <p className="text-primary-black font-medium text-2xl">
              <span className="text-secondary-black font-normal text-base">
                Date:
              </span>{" "}
              {selectedTransaction.date}
            </p>
            <p className="text-primary-black font-medium text-2xl">
              <span className="text-secondary-black font-normal text-base">
                Remark:
              </span>{" "}
              {selectedTransaction.remark}
            </p>
            <p className="text-primary-black font-medium text-2xl">
              <span className="text-secondary-black font-normal text-base">
                Amount:
              </span>{" "}
              {selectedTransaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: selectedTransaction.currency,
              })}
            </p>
            <p className="text-primary-black font-medium text-2xl">
              <span className="text-secondary-black font-normal text-base">
                Currency:
              </span>{" "}
              {selectedTransaction.currency}
            </p>
            <p className="text-primary-black font-medium text-2xl">
              <span className="text-secondary-black font-normal text-base">
                Type:
              </span>{" "}
              {selectedTransaction.type}
            </p>
          </div>
        )}
      </CustomSheet>
    </>
  );
};

export default TransactionTable;
