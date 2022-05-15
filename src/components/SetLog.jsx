const SetLog = ({ setLog }) => {
  return (
    <div>
      <p className="name">{setLog.weight}{setLog.metric} x {setLog.repetitions}</p>
    </div>
  )
}

export default SetLog