import Head from 'next/head';

interface CustomHeadProps {
  title: string;
  description: string;
  keywords: string;
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default CustomHead;
