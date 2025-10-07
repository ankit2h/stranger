import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SideState {
  sidebar: boolean;
  response: string;
  context: string;
  svgs: any[];
  pages: any[];
  open: boolean;
  svgMessages: any[];
  user: string;
  query: string;
  id: string;
  tags: any[];
}

const initialState: SideState = {
  sidebar: true,
  response: "",
  context: "",
  svgs: [],
  pages: [],
  open: false,
  svgMessages: [],
  user: "",
  query: "",
  id: "",
  tags: [],
};

const sideSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.sidebar = action.payload;
    },
    setContext: (state, action: PayloadAction<string>) => {
      state.context = action.payload;
    },
    setSvgs: (state, action: PayloadAction<any[]>) => {
      state.svgs = action.payload;
    },
    setPages: (state, action: PayloadAction<any[]>) => {
      state.pages = action.payload;
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setSvgMessages: (state, action: PayloadAction<any[]>) => {
      state.svgMessages = action.payload;
    },
    clearSvgMessages: (state) => {
      state.svgMessages = [];
    },
    addUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setTags: (state, action: PayloadAction<any[]>) => {
      state.tags = action.payload;
    },
  },
});

export const {
  setSidebar,
  setContext,
  setSvgs,
  setPages,
  setResponse,
  setOpen,
  setSvgMessages,
  clearSvgMessages,
  addUser,
  clearUser,
  setQuery,
  setId,
  setTags,
} = sideSlice.actions;
export default sideSlice.reducer;
