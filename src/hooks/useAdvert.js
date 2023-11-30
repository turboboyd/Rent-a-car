import { useSelector } from 'react-redux';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectStatus,
  selectFavouriteAdverts,
} from 'redux/advertSelectors';


const useAdvert = () => {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const favouriteAdverts = useSelector(selectFavouriteAdverts);
  return {
    adverts,
    isLoading,
    status,
    error,
    favouriteAdverts,
  };
};

export default useAdvert;
