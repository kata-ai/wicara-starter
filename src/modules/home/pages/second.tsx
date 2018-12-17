import * as React from 'react';

import { Button } from '@kata-kit/button';
import { Dashboard } from '@kata-kit/dashboard';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter
} from '@kata-kit/drawer';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from '@kata-kit/dropdown';
import { CardGrid, Card, CardButton } from '@kata-kit/card';

interface HomeSecondPageState {
  open: boolean;
}

class HomeSecondPage extends React.Component<{}, HomeSecondPageState> {
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
        <DrawerHeader title="Drawer Title" />
        <DrawerBody>
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
        </DrawerBody>
        <DrawerFooter>
          <Button color="primary" onClick={() => this.toggleDrawer()}>
            Close drawer
          </Button>
        </DrawerFooter>
      </>
    );
  }

  public render() {
    const { open } = this.state;

    return (
      <Dashboard title="Second Page" tooltip="Second page of the kata-kit demo">
        <CardGrid>
          <Card asButton onClick={() => this.toggleDrawer()}>
            <CardButton label="Add Entry" icon="add" />
          </Card>
          <Card
            title="Second Card"
            action={
              <Dropdown>
                <DropdownToggle caret={false}>
                  <Button isIcon>
                    <i className="icon-more" />
                  </Button>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Update</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            }
          >
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Card>
          <Card title="Third Card">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Card>
        </CardGrid>

        <Drawer isOpen={open} onClose={() => this.toggleDrawer()}>
          {this.renderInner()}
        </Drawer>
      </Dashboard>
    );
  }
}

export default HomeSecondPage;
