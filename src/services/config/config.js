const config = {
    //convert date
    dateToLocal: (date, options) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (!date) return '-'
        const ISODate = date?.split(".") && date?.split(".")[0] + "Z";
        const customDate = ISODate
            ? new Date(ISODate)
            : "-";
        return monthNames[customDate.getMonth()] + ' ' + customDate.getDay() + ' ' + ','+ customDate.getFullYear()
    },
}

export default config;