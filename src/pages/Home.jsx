import Banner from "../components/home/banner/Banner"
import BookCard from "../components/home/bookCard/BookCard"
import TopBar from "../components/topbar/TopBar"
import styles from "./home.module.css"

const Home = () => {
  return (
    <div>
      <TopBar />
      <Banner />
      <div className={styles.text}>
        <h3>Todos los libros</h3>
      </div>
      <div className={styles.BookCardContainer}>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  )
}

export default Home
