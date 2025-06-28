import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { remove_from_paste } from "./paste_slice";
import toast from "react-hot-toast";
import './Paste.css';
import { NavLink } from "react-router-dom";
import copyIcon from './copy-svgrepo-com.svg';
import deleteIcon from './delete-1487-svgrepo-com.svg';
import viewIcon from './view-eye-svgrepo-com.svg'
import editIcon from './edit-3-svgrepo-com.svg'


function Paste() {
  const pastes = useSelector((state) => state.paste.pastes);
  const [search_term, set_search_term] = useState('');
  const dispatch = useDispatch();

  const filtered_data = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search_term.toLowerCase())
  );

  function handle_delete(paste_id){
    dispatch(remove_from_paste(paste_id))
  }


  return (
    <div className="paste">
      {/* Search */}
      <input
        type="search"
        placeholder="Search"
        value={search_term}
        onChange={(e) => set_search_term(e.target.value)}
        className="search"
      />

      {/* Display Results */}
      <div className="space">
        {filtered_data.map((paste) => (
          <div key={paste?._id} className="res">
            <h3>{paste.title}</h3>

            <p>{paste.content}</p>

            <div className="btns">
              <button>
                <NavLink to={`/?paste_id=${paste?._id}`}>
                <img src={editIcon} alt="" className="copy-img"/>
                </NavLink>
              </button>
              
              <button>
                <NavLink to={`/pastes/${paste?._id}`}>
                <img src={viewIcon} alt="" className="copy-img"/>
                </NavLink>
                
              </button>

              <button onClick={()=>handle_delete(paste?._id)}>
              <img src={deleteIcon} alt="copy icon" className="copy-img" />
              </button>

              <button onClick={()=>{navigator.clipboard.writeText(paste?.content)
                  toast.success('Content Copied')}}>
                <img src={copyIcon} alt="copy icon" className="copy-img" />
              </button>

             
            </div>

            <div>
              {paste.createdAt}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Paste
