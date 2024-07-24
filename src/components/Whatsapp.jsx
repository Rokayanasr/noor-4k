import './../App.css'
import { Link } from "react-router-dom";
function Whatsapp() {
    return (
        <div id='whatsapp'>
            <Link to='https://web.telegram.org/a/#1326082848' target='_blank' id='toggle1' className='whtsapp flex items-center justify-center'>
                <svg className='h-12 w-12 fill-black' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M2.617 15.832l6.44 2.187 15.291-9.348c.222-.135.449.166.258.342L13.03 19.668l-.43 5.965a.494.494 0 00.838.388l3.564-3.505 6.516 4.932c.702.532 1.719.157 1.908-.703l4.537-20.6c.259-1.175-.893-2.167-2.016-1.737L2.585 14.12c-.796.305-.774 1.438.032 1.712z' />
                </svg>
            </Link>
        </div>
    );
}

export default Whatsapp;
