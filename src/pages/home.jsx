import React from "react";
import { Page } from "framework7-react";
import Spin from "../components/spin";

const HomePage = () => (
  <Page name="home">
    <div className="flex justify-center items-center h-full">
      <Spin />
    </div>
  </Page>
);
export default HomePage;
