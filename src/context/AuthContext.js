import {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

const dummyUsers = [
  { username: 'admin', password: 'password', role: 'admin' },
  { username: 'client1', password: 'client123', role: 'client' },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = ({ username, password }) => {
    const found = dummyUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (found) {
      setUser({ username: found.username, role: found.role });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
