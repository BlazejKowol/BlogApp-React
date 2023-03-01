const dateToString = date => {
    const dateObject = { day: 'numeric', month: 'numeric', year: 'numeric' };

    return new Date(date).toLocaleDateString("en-US", dateObject);
}

export default dateToString;


/*const dateOriginal = new Date(date);

const dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', dateObject);

return dateTimeFormat2.format(dateOriginal);*/