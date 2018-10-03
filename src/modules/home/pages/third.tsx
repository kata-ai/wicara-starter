import * as React from 'react';

import { Dashboard } from '@kata-kit/dashboard';
import { Board } from '@kata-kit/common';

const HomeThirdPage = () => (
  <Dashboard title="Third Page">
    <Board>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges:
        constructio interrete. Non enim solum Torquatus dixit quid sentiret, sed
        etiam cur. Ut in geometria, prima si dederis, danda sunt omnia. An eum
        discere ea mavis, quae cum plane perdidiceriti nihil sciat?{' '}
      </p>

      <p>
        Huius ego nunc auctoritatem sequens idem faciam. Hic Speusippus, hic
        Xenocrates, hic eius auditor Polemo, cuius illa ipsa sessio fuit, quam
        videmus. At iste non dolendi status non vocatur voluptas. Videamus animi
        partes, quarum est conspectus illustrior;{' '}
      </p>

      <p>
        Quid ait Aristoteles reliquique Platonis alumni? Omnis enim est natura
        diligens sui. <strong>Test embed follows.</strong>{' '}
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ERU9ZtTs3Fk"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Board>
  </Dashboard>
);

export default HomeThirdPage;
