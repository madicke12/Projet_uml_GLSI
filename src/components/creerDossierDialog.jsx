import CreerDossierForm from "./samaForm";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogTitle
} from "./ui/dialog";

const CreerDossierDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="text-left p-2 border" >Creer Dossier</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Creer Dossier patient</DialogTitle>
          <DialogDescription>Veuillez remplir le formulaire s'il vous plait !</DialogDescription>
        </DialogHeader>
        <CreerDossierForm/>
      </DialogContent>
    </Dialog>
  );
};

export default CreerDossierDialog;