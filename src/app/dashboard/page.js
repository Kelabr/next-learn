import {fetchConcultaAll, fetchCount} from '@/app/lib/data'
import Card from '@/components/Card'
import Count from '@/components/Count'

export default async function Dashboard(){

    const consult = await fetchConcultaAll()
    const count = await fetchCount()

    return(
        <>
            <p>Dashboard Page</p>
            {
                consult.rows.map((value)=>(
                    <Card data={value}/>
                )
                    
                )
                 
            }
            {
                <Count data={count}/>
            }
        </>
        
        
    )
}