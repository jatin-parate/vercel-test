export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const { title: name } = await res.json();
    console.log('---- running getStaticProps -------')

    return {
        props: { name },
        revalidate: 60 * 60
    }
}

export default function MessagePage( { name }) {
    return <h1>Name</h1>
}