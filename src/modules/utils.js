

    function filterReal (contacts, search) {
        return contacts.filter((contact) => {
            return (Object.keys(contact).reduce((a, info) => {
                let x = contact[info].toLowerCase();
                let y = search.toLowerCase();
                if(x.includes(y) && info !== 'id' && info !== 'avatar'){
                    a = true
                }
                return a
            },false))
            /* const x = contact.name.toLowerCase();
            const y = search.toLowerCase();
            return x.includes(y); */
        });
    };
    
    export {sortByInfo, filterReal};