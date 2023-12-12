import { useState, useEffect } from "react"

const dummyContact = {name: '', phone: '', email: '', address: {city: ''}, company: {name: '', catchPhrase: '', bs: ''}}

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(dummyContact)
    useEffect(() => {
        async function getContact() {
            try{
                const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await res.json()
                setContact(result)
            } catch(error) {
                console.error(error)
            }
        }

        getContact()
    }, [])

    return (<div>
        <div>
            <h2>{contact.name}</h2>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Location: {contact.address.city}</p>
        </div>
        <div>
            <h3>Company: {contact.company.name}</h3>
            <p>{contact.company.catchPhrase}</p>
            <p>{contact.company.bs}</p>
        </div>
        <button onClick={() => {setSelectedContactId(null)}}>Return to Contact List</button>
    </div>)
}