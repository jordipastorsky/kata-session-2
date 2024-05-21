import { useState, useEffect, useContext } from 'react';
import { ClientContext } from './ClientContext';

const useAlert = () => {
  const [displayAlert, setDisplayAlert] = useState('INIT');
  const { clients } = useContext(ClientContext);

  useEffect(() => {
    if (displayAlert !== 'INIT') setDisplayAlert('DISPLAY');
    setTimeout(() => {
      setDisplayAlert('NOT_DISPLAY');
    }, 2000);
  }, [clients]);

  return displayAlert;
};

export default useAlert;
