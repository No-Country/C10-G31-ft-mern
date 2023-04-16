
interface AlertProp {
  alert: {
    msg: string,
    error: boolean
  }
}

const Alert = ({alert}: AlertProp) => {
  return (
    <div className={`${alert.error ? 'text-[#F0604D]' : 'text-[#3681F0]'} text-center`} >
        {alert.msg}
    </div>
  )
}

export default Alert
