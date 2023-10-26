
interface Props {
  address?: any
}

const Adresscard = ({address}:Props) => {
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>{address?.firstName + " " + address?.lastName}</p>
            <p>{address?.streetAddress}</p>
            <div className='space-y-1'>
                <p className='opacity-60 text-sm'>Phone Number</p>
                <p>{address?.mobile}</p>
            </div>
        </div>
    </div>
  )
}

export default Adresscard