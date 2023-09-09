/** @jsx jsx */
import { jsx } from 'theme-ui';

import Inner from '../elements/Inner';
import Content from '../elements/Content';
import ShapesHero from './shapes/hero';

import Intro from "../sections/intro.mdx"

const Hero = ({ offset }) => (
  <div>
    <ShapesHero offset={offset} />
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset}>
      <Inner><Intro /></Inner>
    </Content>
  </div>
);

export default Hero;
