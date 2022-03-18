export const getPriceRangedData = (data, priceRange) => {
    const [startValue, endValue] = priceRange.toString().split('-')
    if (priceRange !== 0) {
        if (startValue !== undefined && endValue !== undefined) {
            return data.filter(item => item.price >= parseInt(startValue) && item.price < parseInt(endValue))
        } else {
            return data.filter(item => item.price > parseInt(startValue))
        }
    }
    return data;
}

export const getFilteredData = (data, state) => {
    console.log('filter data')
    let filteredData = data;
    return filteredData;
}