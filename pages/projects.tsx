import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';

import { media } from 'utils/media';

const PROJECTS = [
  {
    imageUrl: '/grid-icons/affinidi.svg',
    title: 'Affinidi',
    description:
      'Developed a secure identity verification system using blockchain technology. Implemented robust encryption methods to ensure data integrity and privacy. Collaborated with a cross-functional team to achieve seamless integration.',
  },
  {
    imageUrl: '/grid-icons/launchnow.png',
    title: 'LaunchNow',
    description:
    'Created a dynamic project launch platform, streamlining the process for users. Integrated real-time collaboration features for efficient teamwork. Utilized cutting-edge technologies to enhance user experience and platform functionality.',
  },
  {
    imageUrl: '/grid-icons/mystoop.webp',
    title: 'Stoop',
    description:
      'Designed and implemented an engaging content-sharing platform. Integrated social features for user interaction and content discovery. Optimized the user interface for a smooth and intuitive experience.',
  },
  {
    imageUrl: '/grid-icons/swipein.jpeg',
    title: 'SwipeIn',
    description:
      'Developed a Talent Pool Management System with a focus on efficient candidate tracking and recruitment processes. Implemented advanced filtering and search functionalities for better talent acquisition.',
  },
  {
    imageUrl: '/grid-icons/kiddly.webp',
    title: 'Kiddly',
    description:
      'Established a secure social network for parents to connect and share parenting experiences. Implemented privacy controls and child-friendly features to ensure a safe and supportive community.',
  },
  {
    imageUrl: '/grid-icons/ceragon.svg',
    title: 'Ceragon',
    description:
      'Engineered a Bandwidth Equipment Testing Framework for comprehensive testing of network equipment. Implemented automated testing protocols to enhance efficiency and accuracy in equipment evaluation.',
  },
]

export default function ProjectsPage() {
  return (
    <Page title="Projects" description="Some of the projects I've put my skills in.">
      <Wrapper>
        <CustomAutofitGrid>
          {PROJECTS.map((singleProject, idx) => (
            <BasicCard key={singleProject.title} {...singleProject} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
