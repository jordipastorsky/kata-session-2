const ClientList = () => {
  return(
    <ul className="client-list">
      {
        Object.keys(localStorage).map(key => {
          const client = JSON.parse(localStorage[key]);
          return (
            <li key={client.email}>
              <strong>{client.name}</strong><br />
              <span>Email: {client.email}</span><br />
              <span>Phone: {client.phone}</span><br />
              <span>Address: {client.address}</span><br />
            </li>
          )
        })
      }
    </ul>
  );
};

export default ClientList;