import styles from '../styles/Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router';
import { useQuery } from '../hooks/useQuery'

export default function Search() {
  const query = useQuery();
  const search = query.get("search");

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <form
      onSubmit={handleSubmit}
      className={styles.searchContainer}>
      <div className={styles.searchBox} action="">
        <input
          value={search}
          onChange={(e) => {
            const value = e.target.value;
            history.push(`/?search=${value}`)
          }}
          className={styles.searchInput}
          type="text"
          aria-label="Search Movies"
          placeholder='Search Movies' />
        <button
          className={styles.searchButton}
          type="submit"
        >
          <FaSearch size={20}></FaSearch>
        </button>
      </div>
    </form>
  )
}
