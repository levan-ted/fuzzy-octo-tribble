import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Modal from '../Modal';
import Form from '../Form';
import { Plus } from 'react-feather';
import classes from './Gallery.module.scss';
import { generateKey } from '../../helpers/keyGenerator';

const Gallery = ({ list }) => {
  const [showModal, setShowModal] = useState(false);
  if (list.length === 0) return <p>No results</p>;
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <section className={classes['grid-container']}>
        <button className={classes['add-card']} onClick={handleModal}>
          <Plus className={classes.plus} />
        </button>
        {list.map((item, idx) => (
          <Card key={generateKey()} idx={idx} data={item} className={classes[`h-${item.size}`]} />
        ))}
      </section>
      {showModal && (
        <Modal handleClose={handleModal}>
          <Form handleClose={handleModal} />
        </Modal>
      )}
    </>
  );
};

Gallery.propTypes = {
  list: PropTypes.array
};

export default Gallery;
