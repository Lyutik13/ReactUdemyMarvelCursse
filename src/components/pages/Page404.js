import { Link } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Page404 = () => {
	return (
		<>
			<ErrorMessage />
      <p style={{'textAlign': 'center'}}>This page not faund!</p>
      <Link to={'/'} style={{'textAlign': 'center', 'display': 'block', 'paddingTop': '10px'}}>Back to main page</Link>
		</>
	)
}

export default Page404
