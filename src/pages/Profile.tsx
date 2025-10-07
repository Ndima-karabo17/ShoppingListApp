import account from '../assets/images/account.png'

function Profile(){
    return(
<>
      <div className='bg-white text-black h-182 '>
         <header>
        <h2 className="text-3xl font-mono ml-120 ">Update your profile</h2>
        <p className='text-xl font-serif ml-120 text-zinc-400'>Ensure your contact info is current to <br /> keep your account safe and recoverable.</p>
        </header>
        <main>
           <div className='flex gap-10'>
            <div>
                 <img src={account} className='w-25 ml-10 mt-20' />
            </div>
             <div className='mt-30'>
                <h3 className=''>Ndima Mhangwani</h3>
             <p className='text-sm'>ndima@com</p>
             </div>
           </div>
            <div>
                <form action="">
                   <div className='grid grid-cols-2 gap-2 p-4 ml-8'>
                     <div className='mt-10'>
                        <label htmlFor="" className='text-xl'>Current Password:</label><br />
                        <input type="password" className='bg-white w-100 h-10 rounded-xl border-1 text-black' required/>
                    </div>
                    <div className='mt-10'>
                        <label htmlFor="" className='text-xl'>Email Address:</label><br />
                        <input type="password" className='bg-white w-100 h-10 rounded-xl border-1 text-black' required/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl'>Re-enter Password:</label><br />
                        <input type="password" className='bg-white w-100 h-10 rounded-xl border-1 text-black' required/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl'>Current Cell Number:</label><br />
                        <input type="email" className='bg-white w-100 h-10 rounded-xl border-1 text-black' required/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl'>New Password:</label><br />
                        <input type="tel"className='bg-white w-100 h-10 rounded-xl border-1 text-black'/>
                    </div>
                    <div className='mt-5'>
                        <label htmlFor="" className='text-xl'>New Cell Number:</label><br />
                        <input type="tel" className='bg-white w-100 h-10 rounded-xl border-1 text-black' required/>
                    </div>
                    <div>
                        <button className='border-1 hover:border-amber-100 w-34 h-10 rounded-xl ml-250 text-xl'>Update Profile</button>
                    </div>
                   </div>
                </form>
            </div>
        </main>
      </div>
       </>
    );
}


export default Profile;
