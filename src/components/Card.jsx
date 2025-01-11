export default function Card({data}){ 

    return(
        <div className="bg-orange-400 w-60 p-3 mb-3 rounded-md">
            <ul>
                <li>Nome: {data.name}</li>
                <li>Email: {data.email}</li>
            </ul>
        </div>
    )
}