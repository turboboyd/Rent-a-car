import css from './BtnLoadMore.module.css'

function BtnLoadMore({loadMore}) {
  return (
    <>
      <button className={css.btn} onClick={loadMore}>Load more</button>
    </>
  );
}

export default BtnLoadMore;
