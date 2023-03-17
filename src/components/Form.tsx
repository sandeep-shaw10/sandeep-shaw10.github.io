import supabase from "../utils/supabase";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";


interface AuthResponse {
  provider_token: string;
  provider_refresh_token: null | string;
  access_token: string;
  expires_in: number;
  expires_at: number;
  refresh_token: string;
  token_type: string;
  user: {
    id: string;
    aud: string;
    role: string;
    email: string;
    email_confirmed_at: string;
  };
}


const Form = () => {

    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [desc, setDesc] = useState('')
    const [auth, setAuth] = useState<any>(null)

    // fetching auth token from localStorage
    useEffect(() => {
      setAuth((prevAuth: AuthResponse | null) => {
        const val = localStorage.getItem(import.meta.env.VITE_REACT_APP_SUPABASE_AUTH_GITHUB);
        if (val) {
          const parsedVal: AuthResponse = JSON.parse(val);
          // Chaeck email and expiration
          if (parsedVal.expires_at && parsedVal.user?.email) {
            if (parsedVal.expires_at * 1000 >= Date.now()) {
              return parsedVal;
            }
            return null;
          }
          return null;
        }
        return null;
      });
    }, [])

    async function githubOAuth() {
        await supabase.auth.signInWithOAuth({ provider: 'github' }).then(({error}) => {
          if(error){ toast.error(error.message) }
          else{
            toast.success('Authenticating...', {
              autoClose: 10000
            })
          }
        })
    }

async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault()
    if(name.length > 0 && subject.length >= 8 && desc.length >= 8){
        await supabase.auth.signInWithOAuth({
            provider: 'github',
        }).then(async({error}) => {
          if(error){
            toast.error('Failed to Authenticate')
          }else{
            const { error } = await supabase.from('Feedback').insert({ 
              email: auth.user.email, 
              name: name,
              subject: subject,
              message: desc 
          })
          if(error){
              toast.error("Failed to send Feedback")
              console.log(error)
          }else{
              toast.success("Feedback Send Successfuly");
              setDesc('')
              setName('')
              setSubject('')
          }
          }
        })
    }else{
        toast.error("Minimum 8 words required for Subject and Message")
    }
  }

    return (<div>
      <section className="pt-8 lg:pt-16">
        <div className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md glass rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="flex flex-col font-black leading-none text-shaw-700 uppercase font-bebas-neue sm:text-8xl dark:text-shaw-200">
              <span className="text-3xl sm:text-5xl pb-8">GET IN TOUCH</span>
            </h1>
          </div>
          { !auth ? <div className="text-center py-16">
            <button onClick={githubOAuth} type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
  Continue with Github
  <svg className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792">
  <path fill="white" d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>    </svg>
</button></div>
          
          :<form className="space-y-8" onSubmit={handleSubmit} >
            <div className="relative">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-shaw-900 dark:text-shaw-300">Full Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" className="block p-4 w-full text-sm text-shaw-900 bg-shaw-50 rounded-lg border border-shaw-300 shadow-sm focus:ring-shaw-500 focus:border-shaw-500 dark:bg-shaw-700 dark:border-shaw-600 dark:placeholder-shaw-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500 dark:shadow-sm-light" placeholder="Your Name" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-shaw-900 dark:text-shaw-300">Subject</label>
              <input minLength={8} onChange={(e) => setSubject(e.target.value)} value={subject} type="text" id="subject" className="block p-3 w-full text-sm text-shaw-900 bg-shaw-50 rounded-lg border border-shaw-300 shadow-sm focus:ring-shaw-500 focus:border-shaw-500 dark:bg-shaw-700 dark:border-shaw-600 dark:placeholder-shaw-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-shaw-900 dark:text-shaw-400">Your message</label>
              <textarea minLength={8} onChange={(e) => setDesc(e.target.value)} id="message" rows={6} className="block p-2.5 w-full text-sm text-shaw-900 bg-shaw-50 rounded-lg shadow-sm border border-shaw-300 focus:ring-shaw-500 focus:border-shaw-500 dark:bg-shaw-700 dark:border-shaw-600 dark:placeholder-shaw-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500" placeholder="Leave a comment..." defaultValue={desc} />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-shaw-700 sm:w-fit hover:bg-shaw-800 focus:ring-4 focus:outline-none focus:ring-shaw-300 dark:bg-shaw-600 dark:hover:bg-shaw-700 dark:focus:ring-shaw-800">Send message</button>
          </form>}
        </div>
      </section>
    </div>
  );
};


export default Form;