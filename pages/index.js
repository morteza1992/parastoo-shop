import dynamic from 'next/dynamic'
const DynamicComponent = dynamic(() => import('../components/slider/slider'))

function Home() {
    return (
        <div>
            <DynamicComponent/>
        </div>
    )
}

export default Home