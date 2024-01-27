import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.svg";

const Search = ({ text }) => {
  const { wrapper, searchContainer, search, searchButton, icon } = styles;

  return (
    <form className={wrapper}>
      <div>
        <input className={search} placeholder={text} />
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
