import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// <!-- Contact links (FA and Material icons) -->
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
// <link href="https://fonts.googleapis.com/css?family=Rubik:300,500,700" rel="stylesheet" />
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
// <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css">


// import 

// const element = 


// const features = [
//   {
//     title: 'Easy to Use',
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={clsx('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }





function Home() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // fetch('http://quotes.rest/quote/random.json')
  //   fetch("https://type.fit/api/quotes", {
  //     mode
  //   })
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(data) {
  //   console.log(data);
  // });
  console.log("start")

    fetch('https://api.quotable.io/random', {
      mode: 'no-cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Theysaidso-Api-Secret': '',
      }
    })
    .then( response => response.json())
    .then( data => {
      if (data) {
        console.log(data);
        setQuote(data.quote);
      }
    })
    .catch( error => console.log(error))

  }, []);







  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="thoughts <head />">
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}> */}
        <div className="container index_container">
          {/* <div style={{marginTop: '10vh'}}> </div> */}
          <p className="hero__title">Welcome</p>
          {/* <p className="hero__title">{siteConfig.title}</p> */}
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
            <p>I am a software engineer passionate about sustainability, working at a
                <a href="https://www.mpr.com">consulting firm</a> in the energy sector based in Washington D.C. Our team
                supports our client's initiatives towards a more sustainable energy future.
            </p>
            <p>
                My primary interests are at the intersection of sustainability, philosophy, and technology. To that
                end, I have been building <nobr><a href="https://contours.co">contours.co</a>,</nobr> a streamlined
                satellite image pre-processing API for computer vision requests in OpenCV with React and AWS to simplify
                LiDAR data processing at scale.
            </p>
            <p>
                Outside of creating I enjoy being out on
                <a href="https://www.youtube.com/watch?v=ai6nz2hmtW8&ab_channel=AlMiller">trail</a>, learning piano
                works by Maurice Ravel, and spending time with my girlfriend Perrin. Communities that I am
                interested/involved in include <nobr><a href="https://workonclimate.org" target="_blank"><span>Work on
                            Climate</span></a></nobr> and <nobr><a href="https://lesswrong.com">Less Wrong</a>.</nobr>
            </p>
            <p>
                Do please <a href="mailto:albert.miller@uconn.edu" target="_blank">reach out!</a>
            </p>
          <div style={{marginBottom: '10vh'}}> </div>
          <div style={{marginBottom: '400px'}}> </div>

          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        </div>
      {/* </header> */}
      {/* <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main> */}
    </Layout>
  );
}

export default Home;
