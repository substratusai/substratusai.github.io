import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Deploy Open source LLMs in minutes",
    Svg: require("@site/static/img/icons/rocket.svg").default,
    description: (
      <>
        Substratus enables production-ready deployments of
        cutting-edge open-source LLMs in minutes. Popular state-of-the-art models are available as
        prepackaged container images. Use best-practices from the start.
      </>
    ),
  },
  {
    title: "Fine-tuning without the complexity",
    Svg: require("@site/static/img/icons/adjust.svg").default,
    description: (
      <>
        Pull an OSS model off the shelf, register a training dataset, and
        Substratus will do the heavy-lifting to fine-tune the model on
        suitable hardware. Focus on your data instead of fiddling with infrastructure.
      </>
    ),
  },
  {
    title: "Powered by Kubernetes",
    Svg: require("@site/static/img/icons/cube.svg").default,
    description: (
      <>
        Kubernetes controllers sit at the heart of Substratus, orchestrating
        workflows between Models, Datasets, and Notebooks. This architecture and
        our flexible contract empowers users to seamlessly run any framework, on any cloud.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
