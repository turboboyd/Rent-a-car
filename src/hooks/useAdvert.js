import { useSelector } from 'react-redux';
import { selectAdverts, selectError, selectIsLoading, selectStatus } from 'redux/advertSelectors';


const useAdvert = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  return {
    adverts,
    isLoading,
    status,
    error,
  };
};

export default useAdvert;
