import { Suspense } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Box, styled } from '@mui/material';
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Wrapper = styled(Box)({
  display: 'flex',
  margin: '64px 0 0 250px'
});

const Main = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <Suspense fallback={<SuspenseLoader />} >
          <Outlet />
        </Suspense>
      </Wrapper>
    </>     
  );
}

export default Main;
