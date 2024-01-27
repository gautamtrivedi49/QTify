import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const Search = () => {
  const { wrapper, search, searchButton, icon } = styles;

  return (
    <form className={wrapper}>
      <div>
      <input placeholder="Search a album of your choice" className={search} />
        </div>
        <div>
        <button className={searchButton} type="button">
          <SearchIcon className={icon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
