const SetLog = ({ setLog }) => {
  console.log('', setLog)
  return (
    <div>
      <p>{setLog.weight}{setLog.metric} x {setLog.repetitions}</p>
    </div>
  )
}

export default SetLog