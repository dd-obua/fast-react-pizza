import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';

import Button from '../../ui/Button'

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  id;

  return (
    <li className='flex gap-x-4 py-2'>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut && 'opacity-70 grayscale'}`} />
      <div className='flex flex-col text-sm grow p-1.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between '>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className='font-medium uppercase text-stone-500'>Sold out</p>}
          <Button type='secondary'>Add to cart</Button>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.object,
};

export default MenuItem;
