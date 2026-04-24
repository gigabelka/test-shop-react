import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Tier, User } from '../types';
import { mockUser } from '../data/user';

interface UserContextValue {
  user: User;
  tierProgress: { current: Tier; next: Tier | null; spent: number; toNext: number; pct: number };
}

const TIER_THRESHOLDS: { tier: Tier; minSpent: number }[] = [
  { tier: 'bronze', minSpent: 0 },
  { tier: 'silver', minSpent: 10000 },
  { tier: 'gold', minSpent: 30000 },
];

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const user = mockUser;
  const spent = user.orders.reduce((acc, o) => acc + o.total, 0);

  const currentIdx = [...TIER_THRESHOLDS]
    .reverse()
    .find((t) => spent >= t.minSpent)!;
  const current = currentIdx.tier;
  const next =
    TIER_THRESHOLDS.find((t) => t.minSpent > spent)?.tier ?? null;
  const nextThreshold = TIER_THRESHOLDS.find((t) => t.tier === next)?.minSpent ?? spent;
  const toNext = next ? nextThreshold - spent : 0;
  const prevThreshold = TIER_THRESHOLDS.find((t) => t.tier === current)?.minSpent ?? 0;
  const pct = next
    ? Math.min(100, Math.round(((spent - prevThreshold) / (nextThreshold - prevThreshold)) * 100))
    : 100;

  const tierProgress = { current, next, spent, toNext, pct };

  return (
    <UserContext.Provider value={{ user, tierProgress }}>{children}</UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
