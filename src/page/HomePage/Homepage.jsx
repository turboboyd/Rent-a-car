import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from 'utils/const';


const Homepage = () => {


  return (
    <div>
      <h1>Go where you want, when you want</h1>
      <p>
        Whether you´re planning a road trip, need a reliable vechicle for a
        business trip, or just want the convenience of having a car at your
        disposal, we`ve got you covered.
      </p>
      <Link to={CATALOG_ROUTE}>sssssssssssssss</Link>
    </div>
  );
};

export default Homepage;
