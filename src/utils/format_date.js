export function formatDateUTC(utcDate){
    const date = new Date(utcDate)
    const formatDate = Intl
            .DateTimeFormat('en-GB',{
                dateStyle:'medium'
            })
            .format(date)
    return formatDate
}