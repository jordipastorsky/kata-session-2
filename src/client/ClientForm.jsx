import { useState, useContext } from 'react';
import { ClientContext } from './ClientContext';

const ClientForm = () => {
  const { /*clients,*/ setClients } = useContext(ClientContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const submitEmployee = () => {
    setClients(prev => [
      ...prev,
      {
        name,
        email,
        phone,
        address
      }
    ]);
    // setClients([
    //   ...clients,
    //   {
    //     name,
    //     email,
    //     phone,
    //     address
    //   }
    // ]);
  };
  return (
    <div className="form">
      <input type="text" placeholder="Name" onChange={value => setName(value.target.value)} value={name} />
      <input type="email" placeholder="Email" onChange={value => setEmail(value.target.value)} value={email} />
      <input type="tel" placeholder="Phone" onChange={value => setPhone(value.target.value)} value={phone} />
      <input type="text" placeholder="Address" onChange={value => setAddress(value.target.value)} value={address} />
      <button onClick={() => submitEmployee()}>Add client</button>
    </div>
  )
}

export default ClientForm
