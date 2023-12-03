import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts, filterAdverts} from 'redux/advertActions';
import useAdvert from './useAdvert';

const useFetchAdverts = () => {
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();
  const { adverts, favouriteAdverts } = useAdvert();
  useEffect(() => {
    const fetch = async () => {
      const responseLength = await dispatch(fetchAdverts(page));
      if (responseLength < 12) {
        setShowBtn(false);
      }
    };

    fetch();
  }, [dispatch, page]);


   const loadMore = () => {
    setPage(page + 1);
  };
  return { showBtn, loadMore };
};

export default useFetchAdverts;
