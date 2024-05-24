import { create } from "zustand";

const useUserLoggedStore = create((set) => ({
  id: null,
  name: "",
  email: "",
  perfil_image: "",
  banner_image: "",
  token: "",
  isLogged: false,
  update: (user) => set(() => ({ ...user })),
  login: (user, token) => set(() => ({ ...user, token, isLogged: true })),
  logout: () =>
    set(() => ({
      id: null,
      nome: "",
      email: "",
      perfil_image: "",
      banner_image: "",
      token: "",
      isLogged: false,
    })),
}));

export default useUserLoggedStore;
