import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts} from 'redux/advertActions';


const useFetchAdverts = () => {
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(true);
  const dispatch = useDispatch();

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
  return { showBtn, loadMore, setShowBtn };
};

export default useFetchAdverts;
