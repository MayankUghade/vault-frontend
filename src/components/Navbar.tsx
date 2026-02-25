import { Shield } from 'lucide-react'
import { Button } from './ui/button'

export const Navbar = ({setIsSignUpOpen}: {setIsSignUpOpen: (open: boolean) => void}) => {
  return (
      <nav className="fixed top-0 w-full z-50 px-6 py-3 flex justify-between items-center max-w-7xl mx-auto left-1/2 -translate-x-1/2 bg-black">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center glow-emerald">
            <Shield className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter">VAULT</span>
        </div>

        <div className="flex items-center gap-8">
          <Button 
            onClick={() => setIsSignUpOpen(true)}
            className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-emerald-400 transition-colors duration-300 border-none"
          >
            Sign Up
          </Button>
        </div>
      </nav>
  )
}
