import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const SearchInput = () => {
    const [inputField, setInputField] = useState("");
    dispatch = useDispatch();

    const handleInput = (search) => {
        setInputField(search.target.value);
    };

    useEffect(() => {
        if (inputField.length > 0) {
            dispatch(findItems(inputField)); 
        }
    }, [inputField])

    return(
        <div className="search">
            <div className="filters__search">
                <input 
                    type="text" 
                    className="filters__search__input" 
                    placeholder="Pesquisar" 
                    onChange={handleInput}
                />

                <button className="filters__search__icon">
                    <i className="fa fa-search"/>
                </button>
            </div>
        </div>
    );
};

export default SearchInput