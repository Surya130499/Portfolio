import Image from 'next/image';
import { useState, useEffect } from 'react';


const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const projects = [
    {
      "index": "01",
      "title": "Invoice App",
      "description": "A complete invoice management app that is made of vanilla javascript with express and Mongodb. It also have the handy Theme changing support.",
      "category": "Web App",
      "images": [
        {
          "src": "/InvoiceApp/iPad2_lSPvGRLl10H.webp",
          "width": 150,
          "height": 200,
          "type": "tablet"
        },
        {
          "src": "/InvoiceApp/frame_0rusUMbedwS.webp",
          "width": 180,
          "height": 320,
          "type": "phone"
        },
        {
          "src": "/InvoiceApp/iPad_ECmPBWKtOB2S.webp",
          "width": 150,
          "height": 200,
          "type": "tablet"
        },
        {
          "src": "/InvoiceApp/Macbook_VK02RrL_uKg.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        }
      ]
    },
    {
      "index": "02",
      "title": "Audiophile Store",
      "description": "Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. It has multiple pages and Cart Support",
      "category": "Web App",
      "images": [
        {
          "src": "/AudiophileApp/Tab1_BghC3wWLw.webp",
          "width": 150,
          "height": 200,
          "type": "tablet"
        },
        {
          "src": "/AudiophileApp/phone_a3mQs6oGR.webp",
          "width": 180,
          "height": 320,
          "type": "phone"
        },
        {
          "src": "/AudiophileApp/Tab2_RIVydEOD4.webp",
          "width": 150,
          "height": 200,
          "type": "tablet"
        },
        {
          "src": "/AudiophileApp/Desktop_p54aZf9Oh7N.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        }
      ]
    },
    {
      "index": "03",
      "title": "Analytics App",
      "description": "This website is used in Analysis of Anything using Graphs and all possible ways to the ground in convenience.",
      "category": "Web App",
      "images": [
        {
          "src": "/QRApp/Plant_Stats_mame62omO.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        },
        {
          "src": "/QRApp/RowStats_opdSpD_oUbX.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        },
        {
          "src": "/Portfolio/InvoiceApp/Hello_wAEe3RplJ8K.png",
          "width": 180,
          "height": 100,
          "type": "desktop"
        }
      ]
    },
    {
      "index": "04",
      "title": "Trello Clone",
      "description": "The Trello Clone, I designed is not complete ad trello like adding images and all, But as Good as it can get.",
      "category": "Web App",
      "images": [
        {
          "src": "/TrelloClone/Editing__m-mI8kHE.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        },
        {
          "src": "/TrelloClone/HomePage_GwKyax9JP.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        },
        {
          "src": "/TrelloClone/Moving_Hc_74Mj9BWr.webp",
          "width": 180,
          "height": 100,
          "type": "desktop"
        }
      ]
    }
  ]

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="total">
        <div className="projects">
          <div className="projectNumber">{projects[currentProject].index}</div>
          <div className="wrapper">
            <div className="projectName">{projects[currentProject].title}</div>
            <div className="projectDescription">{projects[currentProject].description}</div>
          </div>
          <div className="projectCategory">
            {projects[currentProject].category}
          </div>
        </div>
        <div className="images">
          {
            projects[currentProject].images.map((images, index) => {
              console.log(images, index);
              return (
                images.type === "tablet" ? <div className='Tab'>
                  <Image
                    src={images.src}
                    height={images.height}
                    width={images.width}
                    layout="responsive"
                    alt="Tablet Image"
                  />
                </div> : images.type === "phone" ?
                  <div className="Mobile">
                    <Image
                      src={images.src}
                      height={images.height}
                      width={images.width}
                      layout="responsive"
                      alt="Mobile Image"
                    />
                  </div> : images.type === "desktop" ?
                    <div className="Desktop">
                      <Image
                        src={images.src}
                        height={images.height}
                        width={images.width}
                        layout="responsive"
                        alt="Desktop Image"
                      />
                    </div> : null
              )
            }
            )}
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const data = await getProjects();
//   console.log(data.result);
//   return {
//     props: {
//       projects: data,
//     }
//   }
// }

export default Projects;