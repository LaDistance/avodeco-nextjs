import Head from "next/head";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { EnvVars } from "env";
import Container from "components/Container/Container";
import Navbar from "components/Navbar/Navbar";
import { FooterWave } from "components/FooterWave/FooterWave";

export interface PageProps {
  title: string;
  description?: string;
}

export default function Page({
  title,
  description,
  children,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <Wrapper>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
      <FooterWave />
    </>
  );
}

const Wrapper = styled.div`
  background: rgb(var(--background));
`;

const ChildrenWrapper = styled.div`
  margin-top: 2rem;
`;
