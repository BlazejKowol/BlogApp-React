const dateToString = date => {
    const dateObject = { day: 'numeric', month: 'numeric', year: 'numeric' };

    return new Date(date).toLocaleDateString("en-GB", dateObject);
}
export default dateToString;