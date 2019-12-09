import * as React from 'react';
import styled from 'styled-components';
import {
  Button,
  Box,
  UnstyledAnchor,
  Card,
  Heading,
  Paragraph,
  SideSheet,
  shadows
} from '@wicara/core';

import { Dashboard } from '../../../components/dashboard';

const Anchor = styled(UnstyledAnchor)`
  display: flex;
  flex-direction: column;
  flex: 1 0 33.3%;
  margin: 8px;

  ${Card} {
    box-shadow: ${shadows.layer100};
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    ${Card} {
      box-shadow: ${shadows.layer200};
    }
  }
`;

interface HomeSecondPageState {
  open: boolean;
}

class HomeSecondPage extends React.Component<{}, HomeSecondPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  renderInner() {
    return (
      <>
        <Box alignItems="center" display="flex" mx={48} my={26}>
          <Heading id="stories-title" lineHeight="32px" m={0} scale="heading3">
            Side Sheet Title
          </Heading>
        </Box>
        <Box flex={1} mx={48} my={26}>
          <p>
            Congratulations! You have opened this drawer.{' '}
            <a
              href="https://www.youtube.com/watch?v=ctSYCoMF4z4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have some music.
            </a>
          </p>

          <p>
            <a
              href="https://www.youtube.com/watch?v=mUGDxyG1kOI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorem ipsum dolor sit amet
            </a>
            , consectetur adipiscing elit. Aliter enim nosmet ipsos nosse non
            possumus. Quae ista amicitia est? Duo Reges: constructio interrete.
            An hoc usque quaque, aliter in vita? Primum quid tu dicis breve? Cum
            ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus
            haec. Sed finge non solum callidum eum, qui aliquid improbe faciat,
            verum etiam praepotentem, ut M.{' '}
            <i>Tibi hoc incredibile, quod beatissimum.</i>{' '}
          </p>

          <p>
            Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?
            Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto
            modo dicerentur. Non minor, inquit, voluptas percipitur ex
            vilissimis rebus quam ex pretiosissimis. Illa tamen simplicia,
            vestra versuta. Si qua in iis corrigere voluit, deteriora fecit.
            Stuprata per vim Lucretia a regis filio testata civis se ipsa
            interemit.{' '}
          </p>

          <p>
            Huic ego, si negaret quicquam interesse ad beate vivendum quali
            uteretur victu, concederem, laudarem etiam; Est enim effectrix
            multarum et magnarum voluptatum. At miser, si in flagitiosa et
            vitiosa vita afflueret voluptatibus. At iste non dolendi status non
            vocatur voluptas. Nunc ita separantur, ut disiuncta sint, quo nihil
            potest esse perversius. <i>Hic nihil fuit, quod quaereremus.</i>{' '}
            <b>Frater et T.</b> Ergo id est convenienter naturae vivere, a
            natura discedere. Si quae forte-possumus.{' '}
          </p>
        </Box>
        <Box alignItems="center" display="flex" mx={48} my={26}>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close Side Sheet
          </Button>
        </Box>
      </>
    );
  }

  public render() {
    const { open } = this.state;

    return (
      <Dashboard
        title="Second Page"
        tooltip="Second page of the Wicara demo"
        floatingElements={
          <Button variant="primary" onClick={this.toggleDrawer}>
            Open Side Sheet
          </Button>
        }
      >
        <Box display="flex" flexWrap="wrap" position="relative" mx={-8}>
          <Anchor
            href="https://www.youtube.com/watch?v=S38sf1zi_Fk"
            target="_blank"
          >
            <Card
              bg="white"
              borderRadius="md"
              display="flex"
              flex={1}
              flexDirection="column"
            >
              <img
                alt="Example image"
                src="https://picsum.photos/id/873/1072/708"
                style={{
                  height: 248,
                  objectFit: 'cover',
                  width: '100%'
                }}
              />
              <Box flex="1 1 auto" padding="sm">
                <Heading scale="heading3">An Example Card</Heading>
                <Paragraph marginBottom={0} marginTop="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis, reiciendis doloremque quisquam sequi vel eaque
                  aperiam vitae. Click for a surprise.
                </Paragraph>
              </Box>
            </Card>
          </Anchor>
          <Anchor
            href="https://www.youtube.com/watch?v=ctSYCoMF4z4"
            target="_blank"
          >
            <Card
              bg="white"
              borderRadius="md"
              display="flex"
              flex={1}
              flexDirection="column"
            >
              <Box flex="1 1 auto" padding="sm">
                <Heading scale="heading3">An Example Card</Heading>
                <Paragraph marginBottom={0} marginTop="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi omnis, reiciendis doloremque quisquam sequi vel eaque
                  aperiam vitae. Click for a surprise.
                </Paragraph>
              </Box>
            </Card>
          </Anchor>
        </Box>

        <SideSheet isOpen={open} onClose={() => this.toggleDrawer()}>
          {this.renderInner()}
        </SideSheet>
      </Dashboard>
    );
  }
}

export default HomeSecondPage;
