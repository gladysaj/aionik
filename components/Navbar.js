import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';

const Navbar = () => {
  return (
    <div className="navbar">
      <Input
        id="navbar"
        placeholder="Buscar producto..."
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="search">
              <Icon>search</Icon>
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default Navbar;
