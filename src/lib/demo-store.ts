/** Tiny in-memory store for demo interactions shared across pages (shortlist, compare). */
import { useSyncExternalStore } from "react";

type State = { shortlist: string[]; compare: string[] };
let state: State = { shortlist: ["meera-nair", "rohan-verma"], compare: ["ananya-sharma", "rohan-verma", "meera-nair"] };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}

export const demoStore = {
  toggleShortlist(id: string) {
    state = { ...state, shortlist: toggle(state.shortlist, id) };
    emit();
  },
  toggleCompare(id: string) {
    const next = toggle(state.compare, id);
    state = { ...state, compare: next.slice(-4) };
    emit();
  },
};

export function useDemoStore<T>(select: (s: State) => T): T {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => select(state),
    () => select(state),
  );
}
