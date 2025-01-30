import './Search.scss';
const Search=()=>{
    return(
        <div className="search"> 
            <input type="text" placeholder="Search for a book" className='search__input'/>
            <button className='search__button'>Search</button>
        </div>
    )
}
export default Search;