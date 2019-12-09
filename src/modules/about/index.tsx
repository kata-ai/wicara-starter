import * as React from 'react';
import { Card, Paragraph } from '@wicara/core';

import { Dashboard } from '../../components/dashboard';

const AboutModule = () => (
  <Dashboard title="Third Page">
    <Card bg="white" borderRadius="md" boxShadow="layer100" padding="md">
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod autem
        satis est, eo quicquid accessit, nimium est; Pauca mutat vel plura sane;
        Quae diligentissime contra Aristonem dicuntur a Chryippo.{' '}
        <a
          href="https://www.youtube.com/watch?v=BVggF2TxSu8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quod cum dixissent, ille contra.
        </a>{' '}
        <b>Minime vero, inquit ille, consentit.</b>{' '}
        <b>Odium autem et invidiam facile vitabis.</b>{' '}
      </Paragraph>

      <Paragraph>
        Quis istud possit, inquit, negare? Bonum integritas corporis: misera
        debilitas. Itaque rursus eadem ratione, qua sum paulo ante usus,
        haerebitis. Nec vero sum nescius esse utilitatem in historia, non modo
        voluptatem. Cur deinde Metrodori liberos commendas?{' '}
        <a
          href="https://www.youtube.com/watch?v=mUGDxyG1kOI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quae est igitur causa istarum angustiarum?
        </a>{' '}
        Quod si ita sit, cur opera philosophiae sit danda nescio. Philosophi
        autem in suis lectulis plerumque moriuntur.{' '}
      </Paragraph>

      <Paragraph>
        Duo Reges: constructio interrete. <b>Ita nemo beato beatior.</b> Eam si
        varietatem diceres, intellegerem, ut etiam non dicente te intellego;
        Teneo, inquit, finem illi videri nihil dolere. <b>Frater et T.</b> A
        primo, ut opinor, animantium ortu petitur origo summi boni. Iam in
        altera philosophiae parte. Et si turpitudinem fugimus in statu et motu
        corporis, quid est cur pulchritudinem non sequamur? Nonne videmus quanta
        perturbatio rerum omnium consequatur, quanta confusio?{' '}
        <i>Haec igitur Epicuri non probo, inquam.</i>{' '}
      </Paragraph>
    </Card>
  </Dashboard>
);

export default AboutModule;
