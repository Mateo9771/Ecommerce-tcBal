import { doc, getDoc, getFirestore } from "firebase/firestore"



function Testing (){

    const database = getFirestore()

    const Test = doc(database, 'Item', 'GqAiSS0TcpFQxaiOb8Ox');

    getDoc(Test).then(snapshot => console.log(snapshot.data()))

    return (
        <>
        <h2>Obteniendo doc</h2>
        </>
    )
}

export default Testing