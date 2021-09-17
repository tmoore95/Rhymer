import React from "react";
import Search from "../components/Search/Search";
import Header from "../components/UI/Header";
import PageLayout from "../components/UI/PageLayout";

export default function Home() {
  return (
    <React.Fragment>
      <PageLayout>
        <Header />
        <Search />
      </PageLayout>
    </React.Fragment>
  );
}
