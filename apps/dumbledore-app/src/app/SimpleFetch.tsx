import { useQuery } from "react-query";

export const SimpleFetchView = () => {
    const  { isLoading, error, data }   = useQuery('repoData', () =>
        Promise.resolve([{ name: 'test', age: 12 }, { name: 'test2', age: 13 }, { name: 'test2', age: 14 }])
    )

    if(isLoading) {
        return <div>Laddar data</div>
    }

    if(error) {
        return <div>Det gick inte så bra</div>
    }

    const listOfTesters = data?.map(item => { return <li>{item.name} - {item.age}</li>})

    return <ul>{listOfTesters}</ul>

}