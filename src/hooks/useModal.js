import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const id = query.get('id');
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const id = query.get('id');

    if (id) {
      setIsModalOpen(true);
    }
  }, [location.search]);

  const isModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) {
      navigate('/catalog');
    } else {
      navigate(`?id=${id}`);
    }
  };

  return { isModal, isModalOpen };
};

export default useModal;
