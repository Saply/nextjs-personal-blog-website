// get all values of class functions, filter by boolean to reject falsy values (null, empty string, undefined)
export const cx = (...classNames) => {
    classNames.filter(Boolean).join(" ")
}