import * as React from 'react';
import { Button, Card, Dialog, Box, Heading, Paragraph } from '@wicara/core';

import { Dashboard } from '../../../components/dashboard';

interface HomeFirstPageState {
  open: boolean;
}

class HomeFirstPage extends React.Component<{}, HomeFirstPageState> {
  constructor(props: any) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  renderInner() {
    return (
      <>
        <Box alignItems="center" display="flex" mx="lg" my="md">
          <Heading id="stories-title" lineHeight="32px" m={0} scale="heading3">
            Dialog Title
          </Heading>
        </Box>
        <Box mb="lg" mx="lg">
          <Paragraph m={0}>
            Congratulations! You have opened this modal.{' '}
            <a
              href="https://www.youtube.com/watch?v=ctSYCoMF4z4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have some music.
            </a>
          </Paragraph>
          <img
            style={{ marginBottom: '1rem', maxWidth: '100%' }}
            src="https://picsum.photos/1280/720/?random"
            alt="Randomly-generated placeholder image from picsum.photos"
          />
        </Box>
      </>
    );
  }

  public render() {
    const { open } = this.state;

    return (
      <Dashboard
        title="First Page"
        tooltip="First page of the Wicara demo"
        floatingElements={
          <Button variant="primary" onClick={() => this.toggleDrawer()}>
            Open dialog
          </Button>
        }
      >
        <Card bg="white" borderRadius="md" boxShadow="layer100" padding="md">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facillimum
            id quidem est, inquam. Ita multa dicunt, quae vix intellegam. Hic
            Speusippus, hic Xenocrates, hic eius auditor Polemo, cuius illa ipsa
            sessio fuit, quam videmus.{' '}
          </Paragraph>

          <Paragraph>
            Illa videamus, quae a te de amicitia dicta sunt. Totum autem id
            externum est, et quod externum, id in casu est. Equidem etiam
            Epicurum, in physicis quidem, Democriteum puto. Tollitur beneficium,
            tollitur gratia, quae sunt vincla concordiae. Quoniam, si dis
            placet, ab Epicuro loqui discimus. Ut nemo dubitet, eorum omnia
            officia quo spectare, quid sequi, quid fugere debeant? Qui ita
            affectus, beatum esse numquam probabis; Quae cum dixisset paulumque
            institisset,{' '}
            <a
              href="https://www.youtube.com/watch?v=zefOP3BB70g"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quid est? Tollenda est atque extrahenda radicitus
            </a>
            .{' '}
          </Paragraph>

          <Paragraph mb={0}>
            Duo Reges: constructio interrete. Sed nimis multa. Cuius ad naturam
            apta ratio vera illa et summa lex a philosophis dicitur. Bona autem
            corporis huic sunt, quod posterius posui, similiora. Nondum autem
            explanatum satis, erat, quid maxime natura vellet. Quis tibi ergo
            istud dabit praeter Pyrrhonem,{' '}
            <a
              href="https://www.youtube.com/watch?v=7Y2OIfrT_CU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aristonem eorumve similes
            </a>
            , quos tu non probas?{' '}
          </Paragraph>

          <Dialog isOpen={open} onClose={() => this.toggleDrawer()}>
            {this.renderInner()}
          </Dialog>
        </Card>
      </Dashboard>
    );
  }
}

export default HomeFirstPage;
