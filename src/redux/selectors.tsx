// src/selectors.ts
import { RootState } from "./store";

// src/selectors.ts

export const selectTotalPrice = (state: RootState) =>
  state.cardSlice.items.reduce(
    (total, card) => Number((total + card.totalPrice).toFixed(2)),
    0
  );

// export const selectTotalPrice = (state: RootState) =>
//   state.cards.items.reduce(
//     (total, card) => total + card.price * card.quantity,
//     0
//   );
