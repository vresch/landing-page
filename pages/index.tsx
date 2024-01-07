import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import Hero from 'views/HomePage/Hero';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Max Vresch personal website with services proposition, projects showcase, CTA (Book a Call)"
        />
      </Head>
      <HomepageWrapper>
        <DarkerBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Expertise & Technologies." overTitle="Professional Skills">
            <p>
                Fueling innovation with cutting-edge skills! <Link href="/help-center">Stuck or seeking guidance?</Link>
                <strong> Book a consultation with me</strong> to explore solutions. My areas of expertise include:
            </p>
            <ul>
                <li>Advanced Web Development</li>
                <li>Innovative Web3 dApp Creation</li>
                <li>Development of Autonomous AI Agents</li>
            </ul>
          </BasicSection>
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 4rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
