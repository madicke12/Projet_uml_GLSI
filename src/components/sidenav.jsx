import Link from 'next/link'

const navItem =[
    "Rendez vous",
    "Planning",
    "Creer Dossier"
]

const Elements = navItem.map(item=><Link href="#" key={item}>{item}</Link>)
const SideNav=()=>{
    return(
        <div className="border m-0  h-full">
            {Elements}
        </div>
    )
}

export default SideNav