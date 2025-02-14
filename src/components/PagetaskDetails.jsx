import { useNavigate, useSearchParams } from "react-router-dom";
import {ChevronLeft} from 'lucide-react'

function PagetaskDetails(){
    const navigate = useNavigate()
    const [searchParams]= useSearchParams()
        const title = searchParams.get("title");
        const description=searchParams.get("description");
    return(
        <div className='h-screen w-screen bg-slate-500 p-6 flex justify-center'>
            <div className='w-[500px] space-y-4'>
                <div className=' flex justify-center relative mb-6'>
                    <button onClick={()=>navigate(-1)}
                    className='absolute left-0 bottom-0 text-white'
                    ><ChevronLeft />
                    </button>
                    <h1 className='text-3xl text-white font-bold text-center'>Detalhes da tarefa</h1>
                </div>
                <div className='bg-slate-200 p-4 rounded-md'>
                <h2 className='text-xl font-bold text-slate-600'>{title}</h2>
                <p className='text-slate-600'>{description}</p>
                </div>
            </div>

        </div>
    )
}
export default PagetaskDetails;