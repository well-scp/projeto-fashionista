import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {DebounceInput} from 'react-debounce-input';

import { findItems } from '../../actions/actions';

const SearchInput = () => {
    const [inputField, setInputField] = useState("");
    const dispatch = useDispatch();

    const handleInput = (search) => {
        setInputField(search.target.value);
    };

    useEffect(() => {
        dispatch(findItems(inputField)); 
    }, [inputField], dispatch)

    return(
        <div className="topbar__search">
            <DebounceInput
                minLength={1}
                debounceTimeout={300} 
                type="text" 
                className="topbar__search__input" 
                placeholder='🔍 O que você está procurando?'
                onChange={handleInput}
            />
        </div>
    );
};

export default SearchInput;