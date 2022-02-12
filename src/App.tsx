import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import SideNavBar from "./components/sidenavbar/SideNavbar";

import "./css/app.css";
import Discover from "./pages/discover/Discover";

export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Router>
      <PageContainer>
        <SideNavBar isOpen={isOpen} />
        <ContentWrapper>
          <Switch>
            <Route path="/discover" component={Discover} />
            {/* <Route path="/discover" component={Discover} {...this.props} /> */}
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.main`
  padding-left: 280px;
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
