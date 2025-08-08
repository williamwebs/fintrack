import { DashboardSummary, MenuItem, Transaction } from "@/types";

export const dashboardMenu: MenuItem[] = [
  {
    title: "Dashboard",
    href: "/",
  },
  {
    title: "Transactions",
    href: "/transactions",
  },
  {
    title: "Budgets",
    href: "/budgets",
  },
  {
    title: "Reports",
    href: "/reports",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
};

export const summaryCardsData = [
  {
    title: "Total Balance",
    value: dashboardSummary.totalBalance,
    percentage_change: dashboardSummary.balanceChange,
  },
  {
    title: "Total Credits",
    value: dashboardSummary.totalCredits,
    percentage_change: dashboardSummary.creditsChange,
  },
  {
    title: "Total Debits",
    value: dashboardSummary.totalDebits,
    percentage_change: dashboardSummary.debitsChange,
  },
  {
    title: "Transactions",
    value: dashboardSummary.transactionCount,
    percentage_change: dashboardSummary.transactionChange,
  },
];

export const transactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-01",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-02",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-03",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-04",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-06",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-07",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-08",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-09",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

export const avatarData = [
  {
    initial: "WA",
    imageUrl: "https://github.com/shadcn.png",
  },
  {
    initial: "CN",
    imageUrl: "https://github.com/shadcn.png",
  },
  {
    initial: "LR",
    imageUrl: "https://github.com/shadcn.png",
  },
  {
    initial: "ER",
    imageUrl: "https://github.com/shadcn.png",
  },
];