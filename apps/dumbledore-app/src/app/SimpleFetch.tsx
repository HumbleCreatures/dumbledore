import { QueryClient, useQuery, QueryClientProvider } from 'react-query';
type Case = {
    id: string;
    title: string;
    description: string;
    closed: boolean;
    created: Date;
}

export const SimpleFetchView = () => {
    const  { isLoading, error, data }   = useQuery('repoData', () =>
        fetch('http://localhost:3333/api/case/all').then(res =>
            res.json()
        )
    )

    if(isLoading) {
        return <div>Laddar data</div>
    }

    if(error) {
        return <div>Det gick inte så bra</div>
    }

    const listOfTesters = data?.map((item:Case) => { return <li>{item.title}</li>})

    return <ul>{listOfTesters}</ul>

}

const queryClient = new QueryClient()
export const SimpleFetchWithProviders = () => {
    return <QueryClientProvider client={queryClient}>
        <SimpleFetchView />
    </QueryClientProvider>
}