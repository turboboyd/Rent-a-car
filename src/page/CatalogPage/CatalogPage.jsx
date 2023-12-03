import BtnLoadMore from 'components/Button/BtnLoadMore';
import Filter from 'components/Filter/Filter';
import ItemProduct from 'components/ItemProduct/ItemProduct';
import useFetchAdverts from 'hooks/useFetchAdverts';

const CatalogPage = () => {

  const { showBtn, loadMore, setShowBtn } = useFetchAdverts();
  return (
    <>
      <Filter setShowBtn={setShowBtn}/>
      <ItemProduct />
      {showBtn && <BtnLoadMore loadMore={loadMore} />}
    </>
  );
};

export default CatalogPage;
