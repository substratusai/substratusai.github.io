import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Deploy 40b LLMs in minutes',
    Svg: require('@site/static/img/starting-rocket.svg').default,
    description: (
      <>
        Substratus was designed to make it very easy to deploy the latest
        state of the art models such as Falcon 40b. Popular models are
        prepackaged as Docker containers by the Substratus team.
      </>
    ),
  },
  {
    title: 'Fine tuning without all complexity',
    Svg: require('@site/static/img/complex-sinus.svg').default,
    description: (
      <>
        Substratus allows you to simply specify your dataset and the model and
        will do the training for you. Focus on getting the data instead of
        figuring out the right way to fine tune the models.
      </>
    ),
  },
  {
    title: 'Powered by Containers and K8s',
    Svg: require('@site/static/img/kubernetes-horizontal-color.svg').default,
    description: (
      <>
        Substratus is built a K8s controller and based on containers. That makes
        it possible to run any framework inside the container as long as it
        meets the Substratus container contract.
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
