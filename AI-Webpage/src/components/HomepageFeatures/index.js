import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lecture 1: Paper Reading Assignment',
    Svg: require('@site/static/img/ai-1.svg').default,
    description: (
      <>

        <p><a href="https://arxiv.org/pdf/1102.1523" target="_blank" rel="noopener noreferrer">The NumPy array: a structure for efficient numerical computation</a> </p>


        <p><a href="https://www.nature.com/articles/s41586-020-2649-2" target="_blank" rel="noopener noreferrer">Array programming with NumPy</a> </p>

        <p><a href="https://arxiv.org/pdf/2301.09977" target="_blank" rel="noopener noreferrer">Integration and Evaluation of JAX framework on NeuralProcessing Units</a> </p>

         <p><a href="https://dl.acm.org/doi/epdf/10.1145/3829216.3829301" target="_blank" rel="noopener noreferrer">The Backpropagation algorithm for a math student</a> </p>


         {/* <p><a href="https://arxiv.org/pdf/2205.00832" target="_blank" rel="noopener noreferrer">Gradient Descent, Stochastic Optimization, and Other Tales</a> </p>

          <p><a href="https://ems.press/content/book-chapter-files/33333" target="_blank" rel="noopener noreferrer">Stochastic gradient descent: where optimization meets machine learning</a> </p>


           <p><a href="https://www.mdpi.com/2227-7390/11/3/682" target="_blank" rel="noopener noreferrer">Recent Advances in Stochastic Gradient Descent in Deep Learning</a> </p>


            <p><a href="https://www.pnas.org/doi/10.1073/pnas.2316301121" target="_blank" rel="noopener noreferrer">On the different regimes of stochastic gradient descent</a> </p> */}
      </>

    
    ),
  },
  {
    title: 'Coming Soon',
    Svg: require('@site/static/img/ai-2.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Coming Soon',
    Svg: require('@site/static/img/ai-3.svg').default,
    description: (
      <>
        
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
        <Heading as="h3">{title}</Heading>
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
