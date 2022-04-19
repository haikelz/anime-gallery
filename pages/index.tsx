import { createClient } from '@supabase/supabase-js';
import { Images } from '@/utils/Props'; 
import Head from 'next/head'; 
import ImageCard from './components/ImageCard'; 

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const { data } = await supabaseAdmin
    .from('images')
    .select('*')
    .order('id'); 

    return {
      props: {
        images: data, 
      },
    }
}

const Home = ({ images }: { images: Images[] }) => {
  return (
    <div className='content'>
     <Head>
       <title>Anime Gallery</title>
     </Head> 

     <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'> 
       <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
         {images.map((image) => (
           <ImageCard key={image.id} image={image}/>
         ))}
       </div>
     </div>
    </div>
  )
} 

export default Home; 
