import * as React from 'react';

import { Button } from '@kata-kit/button';
import { Dashboard } from '@kata-kit/dashboard';
import { Board } from '@kata-kit/common';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '@kata-kit/modal';

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
        <ModalHeader title="Modal Title" />
        <ModalBody>
          <p>
            Congratulations! You have opened this modal.{' '}
            <a
              href="https://www.youtube.com/watch?v=ctSYCoMF4z4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Have some music.
            </a>
          </p>
          <img
            style={{ marginBottom: '1rem', maxWidth: '100%' }}
            src="https://picsum.photos/1280/720/?random"
            alt="Randomly-generated placeholder image from picsum.photos"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close modal
          </Button>
        </ModalFooter>
      </>
    );
  }

  public render() {
    const { open } = this.state;

    return (
      <Dashboard title="First Page" tooltip="Homepage of the Wicara demo">
        <Board>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facillimum
            id quidem est, inquam. Ita multa dicunt, quae vix intellegam. Hic
            Speusippus, hic Xenocrates, hic eius auditor Polemo, cuius illa ipsa
            sessio fuit, quam videmus.{' '}
          </p>

          <p>
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
          </p>

          <p>
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
          </p>

          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Open modal
          </Button>

          <Modal show={open} onClose={() => this.toggleDrawer()}>
            {this.renderInner()}
          </Modal>
        </Board>
      </Dashboard>
    );
  }
}

export default HomeFirstPage;
