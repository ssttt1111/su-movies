import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingThisWeek: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingThisWeek, airingToday, error;
    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: topRated }
      } = await tv.getTopRated());
      ({
        data: { results: airingThisWeek }
      } = await tv.getAiringThisWeek());
      ({
        data: { results: airingToday }
      } = await tv.getAiringToday());
    } catch (error) {
      console.log(error);
      error = "Can't get TV.";
    } finally {
      this.setState({
        loading: false,
        error,
        popular,
        topRated,
        airingThisWeek,
        airingToday
      });
    }
  }

  render() {
    const {
      loading,
      popular,
      topRated,
      airingThisWeek,
      airingToday
    } = this.state;
    return (
      <TVPresenter
        loading={loading}
        topRated={topRated}
        airingToday={airingToday}
        airingThisWeek={airingThisWeek}
        popular={popular}
      />
    );
  }
}
