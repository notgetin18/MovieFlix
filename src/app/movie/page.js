import styles from "../styles/common.module.css";
import MovieCard from "../components/MovieCard";
import Loading from "../loading";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url =
    // process.env.RAPID_KEY;
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=64&limit_suggestions=50&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a166074a92mshb09798ddc30f665p193d0fjsnfdd3bad9bfc3",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <div>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          {" "}
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((currElem) => {
              return <MovieCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;
