
interface AlertProp {
    alert: {
        msg: string,
        error: boolean
    }
}

const Alert = ({alert}: AlertProp) => {
  return (
    <div className='text-[#F0604D] text-center' >
        {alert.msg}
    </div>
  )
}

export default Alert
