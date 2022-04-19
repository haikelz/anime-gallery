import { useState } from 'react';
import { Images, cn } from '@/utils/Props'; 
import Image from 'next/image';
import Link from 'next/link'; 

const ImageCard = ({ image }: { image: Images }) => {
  const [isLoading, setLoading] = useState(true); 
  return (
    <div className='shadow-xl bg-green-100 p-4 rounded-lg'>
        <div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
          <a href={image.src}> 
            <Image 
              alt='placeholder'
              layout='fill'
              src={image.src}
              objectFit='cover'
              className={cn('hover:opacity-75 duration-700 ease-in-out', isLoading 
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100'
              )}
              onLoadingComplete={() => setLoading(false)}
            /> 
          </a>
        </div>
        <h3 className='mt-4 text-xl font-bold text-gray-700'>{image.name}</h3>
        <Link href={image.link} passHref><p className='text-md cursor-pointer text-gray-700 hover:underline hover:underline-offset-4 font-bold mt-1'>Image Link</p></Link>
    </div>
  )
}

export default ImageCard; 
