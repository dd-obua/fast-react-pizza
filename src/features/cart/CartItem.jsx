import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';

import Button from '../../ui/Button';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className='py-2 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center gap-6'>
        <p className='mr-auto text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button type='secondary'>Delete</Button>
      </div>
    </li>
  );
}


CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
