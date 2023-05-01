import { create } from "zustand";

type PaginationStore = {
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (pageNumber: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  updatePagePosition: (pagePositionDelta: number) => void;
};

const usePaginationStore = create<PaginationStore>((set) => ({
  currentPage: 0,
  itemsPerPage: 12,
  setCurrentPage: (pageNumber: number) =>
    set((state) => ({
      ...state,
      currentPage: pageNumber < 0 ? 0 : pageNumber,
    })),
  setItemsPerPage: (itemsPerPage: number) =>
    set((state) => ({ ...state, itemsPerPage: itemsPerPage })),
  updatePagePosition: (pagePositionDelta: number) =>
    set((state) => ({
      ...state,
      currentPage:
        state.currentPage + pagePositionDelta < 0
          ? 0
          : state.currentPage + pagePositionDelta,
    })),
}));

export default usePaginationStore;
