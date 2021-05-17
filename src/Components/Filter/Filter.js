const Filter = ({filter, onChange}) => {

    return (
        <input type='text'
            name='filter'
            value={filter}
            onChange={(event) => onChange(event.target.value)}
            placeholder='Enter name for Search' />
    )
}

export default Filter