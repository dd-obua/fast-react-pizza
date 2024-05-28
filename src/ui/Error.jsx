import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  const message = error.data || error.message;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{message}</p>
      <LinkButton to='-1'>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
