import React, { useCallback, useEffect, useState, useRef } from "react";
import Container from "../components/UI/Container";
import Loader from "../components/UI/Loader";
import SearchInput from "../components/Search/SearchInput";
import { debounce } from "lodash";
import axios from "axios";
import { getAuthToken } from "../helpers/spotify";
import ArtistResult from "../components/Search/ArtistResult";
import styles from "../assets/scss/Search.module.scss";
import Card from "../components/Search/Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const token = getAuthToken();
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      const fetchSearchData = async () => {
        setIsLoading(true);
        const response = await axios
          .get("https://api.spotify.com/v1/search", {
            params: {
              q: query,
              type: "album,artist,playlist,track,show,episode",
            },
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            setResults(res);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });

        return response;
      };

      fetchSearchData();
    } else {
      mounted.current = true;
    }
  }, [query]);

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(queryChangeHandler, 500),
    []
  );

  if (results != null) {
    console.log(results);
  }

  return (
    <Container>
      <SearchInput onQueryChange={debouncedChangeHandler} />
      {results && (
        <div className={styles.results}>
          <div className={styles.results__header}>
            <h1>Best results:</h1>
          </div>
          <br />
          <div className={styles.results__wrap}>
            <Card>
              <ArtistResult data={results.data.artists?.items[0]} />
            </Card>
          </div>
        </div>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default Search;
