import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ handleFilter }) => {
  return (
    <div>
      <label className={css.label}>
        Find contacts by name
        <input
          onChange={handleFilter}
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
