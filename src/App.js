import React from 'react';
import './App.css';
import Modal from "./Modal";

function App() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal()
  };

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eligendi esse facere illo in minima nulla quis reiciendis. Eligendi impedit nostrum quam quod reprehenderit, ullam veritatis. Fuga provident quos velit.</span><span>Accusantium ad, alias animi et eum, excepturi explicabo fuga iusto magnam maxime minima molestias nam nemo nostrum pariatur perspiciatis porro quae quibusdam quidem quis repudiandae sed ullam vel, veniam vero.</span><span>Eligendi nulla quasi quibusdam quod saepe suscipit tenetur voluptas voluptate! Accusamus amet, commodi culpa distinctio dolor eveniet expedita hic iure magnam magni mollitia nulla officia quas, reiciendis repellat sapiente, veniam!</span>
        </p>
        <button onClick={() => modalRef.current.close()}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
}

export default App;
