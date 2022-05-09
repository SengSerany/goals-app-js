import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // eslint-disable-next-line no-unused-vars
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )
  
  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
    
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, message, dispatch, isError]);

  useEffect(() => {
    if (user) {
      dispatch(getGoals())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      {goals.map( goal => {
        return <p>{goal.text}</p>
      })}
      </>
  )
}

export default Dashboard
