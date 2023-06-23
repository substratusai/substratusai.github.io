import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Deploy Open source LLMs in minutes",
    Svg: require("@site/static/img/starting-rocket.svg").default,
    description: (
      <>
        Substratus enables effortless production-ready deployments of
        cutting-edge open-source LLMs in minutes. Our platform offers
        prepackaged Docker images for state-of-the-art OSS models, giving users
        a standardized, scale-to-zero approach to inferencing that eliminates
        bespoke deployments.
      </>
    ),
  },
  {
    title: "Fine-tuning without the complexity",
    Svg: require("@site/static/img/complex-sinus.svg").default,
    description: (
      <>
        Pull an OSS model off the shelf, register a training dataset, and
        Substratus will do the heavy-lifting to train a fine-tuned model on
        suitable hardware. Focus on your data instead of fiddling with details
        of fine-tuning models.
      </>
    ),
  },
  {
    title: "Powered by Kubernetes",
    Svg: require("@site/static/img/kubernetes-horizontal-color.svg").default,
    description: (
      <>
        A Kubernetes controller sits at the heart of Substratus, orchestrating
        workflows between Models, Datasets, and Notebooks. This architecture and
        our flexible contract empowers users to seamlessly run any framework
        within the container.
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
