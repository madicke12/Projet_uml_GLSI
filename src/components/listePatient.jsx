

import Link from 'next/link'
const PatientListe = async()=>{

    const response = await fetch("http://localhost:3001/Patient")
    const patient = await response.json()
    console.log(patient)
    const Elements = patient.map(item=>

         <Link key={item.id} href={`/${item.id}` }className="p-2 w-full= border bg-slate-50 flex space-x-3">
           <div>
            {item.createdAT}
           </div>
           <div>
            {item.nom}
           </div>
           <div>
            {item.adresse}
           </div>
           <div>
            {item.telephone}
           </div>
            </Link>
    )
    return( 
        <div className="p-3">
            {Elements}
        </div>
    )
}

export default PatientListe