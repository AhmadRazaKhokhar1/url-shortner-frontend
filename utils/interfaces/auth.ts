
export interface IAuthProviderProps {
  userId?: string;
  handleLogin: (email: string, name:string) => Promise<void>;
  handleLogout: () => void;
}
