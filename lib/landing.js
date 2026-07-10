import { Bell, CreditCard, PieChart, Receipt, Users } from "lucide-react";
export const FEATURES = [
  {
    title: "Group Expenses",
    Icon: Users,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Easily organize expenses by creating groups for trips, events, roommates, and more.",
  },
  {
    title: "Smart Settlements",
    Icon: CreditCard,
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Let AI minimize the number of transactions required—so everyone settles up with ease.",
  },
  {
    title: "Expense Analytics",
    Icon: PieChart,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Visualize spending trends and gain insights into where your group money goes.",
  },
  {
    title: "Payment Reminders",
    Icon: Bell,
    bg: "bg-amber-100",
    color: "text-amber-600",
    description:
      "Get timely, automated nudges when payments are due—no more awkward follow-ups.",
  },
  {
    title: "Multiple Split Types",
    Icon: Receipt,
    bg: "bg-green-100",
    color: "text-green-600",
    description:
      "Split bills equally, by exact amounts, or percentages—whatever works for your group.",
  },
  {
    title: "Real‑time Updates",
    Icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 14v8M15 14v8M9 2v6M15 2v6" />
      </svg>
    ),
    bg: "bg-teal-100",
    color: "text-teal-600",
    description:
      "Stay in sync. All expenses and repayments update instantly across all devices.",
  },
];
export const STEPS = [
  {
    label: "1",
    title: "Create or Join a Group",
    description:
      "Start a group for your shared expenses—invite friends, housemates, or travel buddies.",
  },
  {
    label: "2",
    title: "Add Expenses",
    description:
      "Log purchases, assign who paid, and let AI handle the splitting automatically.",
  },
  {
    label: "3",
    title: "Settle Up",
    description:
      "See who owes what, and clear debts efficiently with one-tap payment tracking.",
  },
];
export const TESTIMONIALS = [
  {
    quote:
      "Splitr is a game-changer! I finally stopped getting confused about who paid for what. It's like Babu Rao got a finance degree!",
    name: "Saurabh Anand",
    image: "",
    role: "Rental Property Manager",
  },
  {
    quote:
      "Splitr's accuracy is unreal—more reliable than any of my investment tips! Settling debts just got smarter.",
    name: "Bhumi",
    image: "",
    role: "Stock Market Enthusiast",
  },
  {
    quote:
      "Thanks to Splitr, I now keep track of every shoe, coat, and rupee Raju owes me. No more guesswork!",
    name: "Shyam",
    image: "",
    role: "Aspiring Entrepreneur",
  },
];
