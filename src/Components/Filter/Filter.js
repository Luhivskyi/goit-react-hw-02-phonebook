import PropTypes from 'prop-types';


const Filter = ({ filter, onChange }) => {

    return (
        <input type='text'
            name='filter'
            value={filter}
            onChange={(event) => onChange(event.target.value)}
            placeholder='Enter name for Search' />
    )
}

    Filter.propTypes = {
        filter: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    
};

export default Filter