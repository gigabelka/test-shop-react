import type { User } from "../types";

export const mockUser: User = {
  name: "Виктор Белкин",
  email: "gigabelka@gmail.com",
  phone: "+7 (999) 123-45-67",
  tier: "silver",
  points: 2450,
  referralCode: "VIKTOR2026",
  referralsCount: 7,
  orders: [
    {
      id: "o-1024",
      date: "2026-04-18",
      total: 720,
      items: [
        { productId: "p01", qty: 2 },
        { productId: "p08", qty: 1 },
      ],
    },
    {
      id: "o-1019",
      date: "2026-04-05",
      total: 1350,
      items: [{ productId: "p18", qty: 1 }],
    },
    {
      id: "o-1012",
      date: "2026-03-22",
      total: 460,
      items: [
        { productId: "p05", qty: 1 },
        { productId: "p15", qty: 1 },
      ],
    },
  ],
};
