import React from "react";
import ResultsCard from "../components/Results/ResultsCard";
import Search from "../components/Search/Search";
import Header from "../components/UI/Header";
import PageLayout from "../components/UI/PageLayout";

export default function Home() {
  return (
    <React.Fragment>
      <PageLayout>
        <Header />
        <Search />
        <ResultsCard />
      </PageLayout>
    </React.Fragment>
  );
}
