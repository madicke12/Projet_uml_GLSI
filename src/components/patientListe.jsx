import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlarmClock,
  MapPinned,
  CircleUserRound,
  PhoneOutgoing,
} from "lucide-react";
import Link from "next/link";

export default async function TableList() {
  const response = await fetch("http://localhost:3001/Patient");
  const patients = await response.json();
  return (
    <Table>
      <TableCaption>Liste des Patient.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>
            <div className="flex items-center">
              Date d'enregistrement <AlarmClock className="ml-2" size={20} /> 
            </div>{" "}
          </TableHead>
          <TableHead>
            <div className="flex items-center">
              Prenom
              <CircleUserRound className="ml-2" size={20} />
            </div>
          </TableHead>
          <TableHead>
            <div className="flex items-center">
              Nom
              <CircleUserRound className="ml-2" size={20} />
            </div>
          </TableHead>
          <TableHead className="">
            <div className="flex items-center">
              Adresse
              <MapPinned className="ml-2" size={20} />
            </div>
          </TableHead>
          <TableHead className="">
            <div className="flex items-center">
              Telephone
              <PhoneOutgoing className="ml-2" size={20} />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {patients.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.createdAt}</TableCell>
              <TableCell className="font-medium">{item.prenom}</TableCell>
              <TableCell>{item.nom}</TableCell>
              <TableCell>{item.adresse}</TableCell>
              <TableCell className="">{item.telephone}</TableCell>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
