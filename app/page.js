// app/page.js
import Head from 'next/head';
import './globals.css'; // Importing the CSS file

const Page = () => {
  return (
    <>
      <Head>
        <title>File Conversion Services</title>
        <meta name="description" content="Convert your files easily and efficiently with our file conversion services." />
      </Head>
      <main className="container">
        <h1 className="title">Welcome to Our File Conversion Service1  test0</h1>
        <img  src='https://hichamchlghami.github.io/test2/sitfile.svg'  className='sitfilesvg'/>
        <img  src='/sitfile_logo1.png'  className='sitfilesvg'/>

        <p className="description">
          Our platform provides a seamless way to convert various file formats, including documents, images, and videos. 
          Whether you need to convert a PDF to Word, an image to JPEG, or a video to MP4, we've got you covered.
        </p>
        <p className="description">
          With our easy-to-use interface, you can upload your files, choose the desired format, and start the conversion process 
          in just a few clicks. We ensure high-quality conversions while maintaining the integrity of your original files.
        </p>
        <p className="description">
          Join thousands of satisfied users who have simplified their file management with our reliable conversion tools. 
          Start converting your files today!
        </p>
      </main>
    </>
  );
};

export default Page;
