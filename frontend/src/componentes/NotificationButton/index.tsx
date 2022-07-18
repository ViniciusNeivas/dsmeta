import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg'
import { BASE_URL} from '../../utils/request' 
import './styles.css'

type Props = {

  saleId: number;
  name: string;
}
function NotificationButton( {saleId, name} : Props) {

function handleClick(id : number){

  axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
      toast.success(
        "SMS Enviado com Sucesso "  + " para o (a) Vendedor (a) " + name)
    })

}


    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notificar" />
      </div>
    )

}

export default NotificationButton
