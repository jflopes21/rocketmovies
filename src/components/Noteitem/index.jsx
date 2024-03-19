import { Container } from "./styles";
import {FiPlus, FiX} from "react-icons/fi";

export function Noteitem({isNew, value, onClick, ...rest}){
  return(
    <Container $isnew={isNew}>
      <input type="text" defaultValue={value} readOnly={!isNew} {...rest} />
      <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  );
}