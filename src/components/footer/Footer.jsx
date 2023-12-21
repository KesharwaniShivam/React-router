import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
     <footer className="bg-zinc-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <p>Home</p>
            <p>About</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Up</h2>
            <p>Github</p>
            <p>Discord</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Leagal</h2>
            <p><Link to="/privacy">Privacy Policy</Link> </p> 
            <p><Link to="/terms">Terms of Service</Link></p>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2023 Hell YEAH</p>
         
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer