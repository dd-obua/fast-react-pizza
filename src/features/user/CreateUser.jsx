import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 h-10 px-4 mb-4 sm:px-6 sm:py-4'
      />

      {username !== '' && (
        <div>
          <Button type='primary' to='./order/new'>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
