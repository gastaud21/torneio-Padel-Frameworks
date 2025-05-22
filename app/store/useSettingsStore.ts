import { create } from "zustand";

type SettingsStore = {
  esporte: string;
  setEsporte: (sport: string) => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  esporte: "Padel",
  setEsporte: (sport) => set({ esporte: sport }),
}));

//USO
// import { useSettingsStore } from '../store/useSettingsStore';
// const esporte = useSettingsStore((state) => state.esporte);
