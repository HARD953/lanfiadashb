import React,{useState} from 'react'
import { Dialog } from 'primereact/dialog';
import './DialogListPlus.css'
import DataTableList from '../dataTableList/DataTableList';
import DialogActeurDetail from './DialogActeurDetail';




const DialogListPlus = (props) => {
    const [userActeurData,setUserActeurData] = useState([])
    const [dialogVisibleUserData, setDialogVisibleUserData] = useState(false);

    
    const hideDialogUserData = () => {
        setDialogVisibleUserData(false);
    }
    
    const showDialogUserData = () => {
        setDialogVisibleUserData(true);
    }

    const onClickUserDetail = (data)=>{
        setUserActeurData(data)
        showDialogUserData(true)
    }

  return (
     <React.Fragment>
        
     <Dialog header={`Liste ${props.dialogTitle}`} visible={props.dialogVisible} style={{ width: '50vw' }}  onHide={() => props.hideDialog()}>
        <DataTableList onClickUserDetail={onClickUserDetail} />
     </Dialog>

     <DialogActeurDetail userActeurData={userActeurData} dialogVisibleUserData={dialogVisibleUserData} hideDialogUserData={hideDialogUserData}  />

     </React.Fragment>

  )
}

export default DialogListPlus
