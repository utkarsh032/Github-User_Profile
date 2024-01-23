import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Github User API</h1>
            <p className="py-6">Use the REST API to get public and private information about authenticated users.</p>
            <Link to='/github' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
