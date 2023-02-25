import Modal from 'react-bootstrap/Modal';

const Modals = props => {
  
    return (
      <>
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completly remove this post from this app. 
            Do you want to proceed?
            </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary py-0 mx-1" onClick={props.handleClose}>
            <p className="m-2 text-light">Cancel</p>
            </button>
            <button className="btn btn-danger py-0 mx-1" onClick={props.postRemove}>
            <p className="m-2 text-light">Remove</p>
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default Modals