import useAlert from './useAlert';

const Alert = () => {
  const displayAlert = useAlert();

  if (displayAlert !== 'DISPLAY') return null;
  
  return (
    <div class="alert">
      <p> New client has been added </p>
    </div>
  );
};

export default Alert;