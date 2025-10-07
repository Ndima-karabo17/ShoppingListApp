import add from '../assets/images/add.png';
function Catelog(){
    return(
    
    <>
    <div className='bg-amber-50 ml-100 w-150 mt-50 rounded-ms align-middle'>
        <div className='ml-30'>
            <h2 className='text-3xl font-mono '>Grocery List</h2>
            <p className='text-xl font-serif text-zinc-400'>Manage your weekly needs</p>
        </div>
        <div className='mt-10 ml-30'>
            <input type="text" className="border-1 rounded-sm w-70" placeholder="Search items..."/>
            <div className='mt-5'>
                <h3>Milk</h3>
            </div>
             <div>
                <h3>Eggs</h3>
            </div>
             <div>
                <h3>Bread</h3>
            </div>
              <div>
                <img src={add} alt="" className='w-20 ml-90 cursor-pointer'/>
              </div>
        </div>
    </div>
    
    </>
);
}
export default Catelog;