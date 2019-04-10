import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import MovieItem from "../../components/MovieItem";
import Section from "../../components/Section";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({
  loading,
  popular,
  topRated,
  airingThisWeek,
  airingToday
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday ? (
        <Section title="Airing Today Show">
          {airingToday
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {popular ? (
        <Section title="Popular Show">
          {popular
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {topRated ? (
        <Section title="Top Rated Show">
          {topRated
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
      {airingThisWeek ? (
        <Section title="Airing This Week Show">
          {airingThisWeek
            .filter(tv => tv.poster_path !== null)
            .map(tv => (
              <MovieItem
                isMovie={false}
                key={tv.id}
                id={tv.id}
                posterPhoto={tv.poster_path}
                title={tv.name}
                voteAvg={tv.vote_average}
              />
            ))}
        </Section>
      ) : null}
    </Container>
  );

TVPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingThisWeek: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
