import styles from '../styles/Home.module.css'
import Meta from "../components/Meta/Meta";
import BrowseContainer from "../containers/Browse/BrowseContainer";

export default function Home() {

    const pageMeta = {
        description: "A browser for today's current Near Earth Object. API's provided by NASA's JPL Team",
        keywords: "Asteroid, NEO, NASA, JPL, ..."
    }

    return (
        <div className={styles.container}>
            <Meta title='Home' meta={pageMeta}/>
            <main className={styles.main}>
                <div className={styles.header}>
                    <h1>
                        <b className={styles.b}>NeoW Browser</b>
                    </h1>
                    <p>Detailed day by day browser of Near Earth Objects</p>

                    <BrowseContainer/>
                </div>
            </main>
        </div>
    )
}
