import React, { Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

interface CalendarModalContextProps {
  isModalOpened: boolean;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}

export const CalendarModalContext = React.createContext<CalendarModalContextProps | null>(null);

export function CalendarModalContextProvider<T>({ children }: PropsWithChildren<T>) {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <CalendarModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
      }}
    >
      {children}
    </CalendarModalContext.Provider>
  );
}

export function useCalendarModalContext() {
  const context = useContext(CalendarModalContext);
  if (!context) {
    throw new Error('useCalendarModalContext can only be used inside CalendarModalContextProvider');
  }
  return context;
}
