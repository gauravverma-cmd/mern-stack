import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
// persist basicaly data to byDefault local storage me store krne k kaam aata hai, fir agar hum chahe to ise session storge me store kr skte hai
const store = (set, get) => ({
  count: 1,
  name: "alisa malbonia",

  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },

  capitalizeName: () => {
    const { name } = get();
    set({
      name: name.charAt(0).toUpperCase() + name.slice(1),
    });
  },
});

const useMyStore = create(
  devtools(
    persist(store, {
      name: "myStore",
      storage: createJSONStorage(() => sessionStorage),
    }),
  ),
);
export default useMyStore;
