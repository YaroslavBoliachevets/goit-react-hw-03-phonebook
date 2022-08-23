import PropTypes from 'prop-types';

const Filter = ({value, onChange}) => (
	<>
        <label > Find contacts by name</label>
        <input
          type="text"
          name="filter"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
		value={value}
		onChange={onChange}
        />
      </>
)

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}