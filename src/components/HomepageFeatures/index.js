import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/opensource.svg').default,
	description: (
      <>
        Community-led development.
      </>
    ),
  },
  {
    title: 'Connect',
    Svg: require('@site/static/img/connect.svg').default,
    description: (
      <>
        Connect any system.
      </>
    ),
  },
  {
    title: 'Powered by Apache Camel',
    Svg: require('@site/static/img/camel.svg').default,

	description: (
      <>
        Our integration engine.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
