import * as React from 'react';
import { Card, Paragraph } from '@wicara/core';

import { Dashboard } from '../../../components/dashboard';

const HomeThirdPage = () => (
  <Dashboard title="Third Page">
    <Card bg="white" borderRadius="md" boxShadow="layer100" padding="md">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges:
        constructio interrete. Non enim solum Torquatus dixit quid sentiret, sed
        etiam cur. Ut in geometria, prima si dederis, danda sunt omnia. An eum
        discere ea mavis, quae cum plane perdidiceriti nihil sciat?{' '}
      </Paragraph>

      <Paragraph>
        Huius ego nunc auctoritatem sequens idem faciam. Hic Speusippus, hic
        Xenocrates, hic eius auditor Polemo, cuius illa ipsa sessio fuit, quam
        videmus. At iste non dolendi status non vocatur voluptas. Videamus animi
        partes, quarum est conspectus illustrior;{' '}
      </Paragraph>

      <Paragraph>
        Quid ait Aristoteles reliquique Platonis alumni? Omnis enim est natura
        diligens sui. <strong>Test embed follows.</strong>{' '}
      </Paragraph>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ERU9ZtTs3Fk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Card>
  </Dashboard>
);

export default HomeThirdPage;
