const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        MyWorkoutBud is a Full-Stack PERN (PostgreSQL/Express/React/Node)
        application that is desgined to help users keep track of their workouts.
        As a a person that loves the gym and overall health, I wanted to create
        an app that makes this process as simple as possible for people new to
        fitness. This app integrates custom authentication and allows users to
        create trackers to motivate them to stay consistent on their goals.
      </p>
      <p>
        My name is Canh Vo and I am General Assembly student enrolled in the
        Software Engineering Immersive program. This is my Unit 4 project and I
        built this application with the inspiration from MyFitnessPal.
      </p>
      <div>
        <a href="https://www.linkedin.com/in/canhvo16/">LinkedIn</a>
        <a href="https://github.com/canhvo16">GitHub</a>
        <a href="https://github.com/canhvo16/MyWorkoutBud-Frontend">
          {' '}
          Frontend Repository
        </a>
        <a href="https://github.com/canhvo16/MyWorkoutBud-Backend">
          Backend Repository
        </a>
      </div>
    </div>
  )
}

export default AboutPage
