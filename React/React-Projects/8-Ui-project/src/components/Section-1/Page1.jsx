import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1 = () => {
  return (
    <div className='py-3 px-18 flex items-center gap-10 h-[86vh]'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1