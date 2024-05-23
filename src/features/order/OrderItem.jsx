import PropTypes from 'prop-types';

import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  isLoadingIngredients, ingredients;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

OrderItem.propTypes = {
  item: PropTypes.number  ,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(PropTypes.string),
};

export default OrderItem;
