import React, { useState } from 'react';
import { User, Key, EyeOff, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import { toast } from "react-hot-toast";
import { useAuth } from '@/context/auth-context';


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'signup',
}) => {
  const { login } = useAuth();

  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [viewPass, setViewPass] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    if (mode === "signup") {
      const res = await api.post("/user/signUp", {
        userName: username,
        password,
      });

      // ✅ auto-login after signup
      login(res.data.token);

      toast.success("Signup successful!");
    } else {
      const res = await api.post("/user/signIn", {
        userName: username,
        password,
      });

      // ✅ login on signin
      login(res.data.token);

      toast.success(`Welcome back, ${username}!`);
    }

    onClose();
    setUsername("");
    setPassword("");
  } catch (error: any) {
    console.error("Auth failed:", error);

    toast.error(
      error?.response?.data?.message || "Authentication failed"
    );
  }
};

  const toggleMode = () => {
    setMode(mode === 'signup' ? 'signin' : 'signup');
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md glass border-none rounded-[32px] p-10 overflow-hidden text-white bg-black/80 backdrop-blur-sm">
        <DialogHeader className="text-center mb-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 glow-emerald">
            <User className="text-black w-8 h-8" />
          </div>
          <DialogTitle className="text-3xl font-bold mb-2">
            {mode === 'signup' ? 'Create Account' : 'Welcome Back'}
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            {mode === 'signup' 
              ? 'Join the sanctuary of your links.' 
              : 'Enter your credentials to access your sanctuary.'}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Username</Label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <Input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-12 pr-4 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Password</Label>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <Input 
                type={viewPass ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-12 pr-4 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <Button
                type="button"
                variant="ghost"
                onClick={() => setViewPass(!viewPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 hover:pointr"
              >
                {viewPass ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full py-6 bg-emerald-500 text-black font-bold rounded-2xl hover:bg-emerald-400 transition-all glow-emerald mt-4 border-none"
          >
            {mode === 'signup' ? 'Create My Vault' : 'Sign In'}
          </Button>
        </form>

        <p className="text-center text-zinc-500 text-sm mt-8">
          {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <Button 
            variant="link" 
            onClick={toggleMode}
            className="text-emerald-500 font-semibold hover:underline p-0 h-auto"
          >
            {mode === 'signup' ? 'Sign In' : 'Sign Up'}
          </Button>
        </p>
      </DialogContent>
    </Dialog>
  );
};

// Re-export as SignUpModal for compatibility or rename usage throughout
export const SignUpModal = AuthModal;
