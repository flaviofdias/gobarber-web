import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

import ToastContainer from '../components/ToastContainer';

interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

// Inicializando como objeto vazio
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]); // Armazendo informações para mensagens Toast

  const addToast = useCallback((messages) => {}, []);

  const removeToast = useCallback(() => {
    console.log(removeToast);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be user within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
