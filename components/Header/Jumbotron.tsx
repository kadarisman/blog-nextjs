import Image from 'next/image'
import logo from '/public/img/nextjs.png'
export default function Jumbotron() {
  return (
    <div className="drop-shadow-md bg-white px-6">
        <div className="flex mx-auto">            
            <div>
                <Image src={logo} alt="NextJs" width={200} height={200} />
            </div>
            <div className='ml-16 py-6'>
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eligendi quo? Incidunt reiciendis nihil dolores facilis commodi alias non. Sapiente impedit quam aspernatur deleniti dicta pariatur recusandae facere, neque labore..
                </p>
            </div>
        </div>
    </div>
  )
}
