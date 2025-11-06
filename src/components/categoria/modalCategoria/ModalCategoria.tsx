import {Popup} from "reactjs-popup";

function ModalCategoria() {
  return <>
    <Popup trigger={<button>Open Modal</button>} modal>
      <span>Modal Content</span>
    </Popup>
  </>;
}

export default ModalCategoria;