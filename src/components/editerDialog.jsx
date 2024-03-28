
import CreerDossier from '@/app/admin/Creer/page'
import  {Dialog ,DialogHeader ,DialogTrigger ,DialogTitle,DialogDescription,DialogContent} from '@/components/ui/dialog'

import {Edit } from "lucide-react"


const EditDialog =()=>{
    return(
    <Dialog>
      <DialogTrigger className="text-left p-2 border" ><Edit/>Editer</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Antecedents</DialogTitle>
          <DialogDescription>Veuillez remplir le formulaire s'il vous plait !</DialogDescription>
        </DialogHeader>
        <CreerDossier/>
      </DialogContent>
    </Dialog>
    )
}


export default EditDialog