import React from 'react';

import Inner from '../elements/Inner';
import Content from '../elements/Content';
import ShapesAbout from './shapes/about';

import AboutMDX from "../sections/about.mdx";

const About = ({ offset }) => (
  <div>
    <ShapesAbout offset={offset} />
    <Content speed={0.4} offset={offset}>
      <Inner><AboutMDX /></Inner>
    </Content>
  </div>
);

export default About;
