import Link from "next/link"
import styles from "../../styles/People.module.css"
export const getStaticProps = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    return {props:{people: data}}
}

const index = ({people}) => {
  return (
    <div>
        <h1>People</h1>
        {people.map(person=>(
            <Link href={"/people/"+person.id} key={person.id} className={styles.single}>
            <h3>{person.name}</h3>
            </Link>
        ))}
        
          </div>
  )
}

export default index