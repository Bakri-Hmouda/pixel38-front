export const filterData = (itemToFilterOut, data) => {

    return  data.filter(
        (item) => {
            if (item._id !== itemToFilterOut) return item
            return null
        }
    )

}