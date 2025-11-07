import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormEmpresa from "../formempresa/FormEmpresa";
// import FormEmpresa from "../formempresa/FormEmpresa";

function ModalEmpresa({ open, onClose }) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      modal
      contentStyle={{
        borderRadius: "1rem",
        paddingBottom: "2rem",
      }}
    >
      <FormEmpresa />
    </Popup>
  );
}

export default ModalEmpresa;
