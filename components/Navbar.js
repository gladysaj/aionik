import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Icon from '@material-ui/core/Icon';

const Navbar = () => (
  <div className="navbar">
    <img src="/images/chaman-morado.png" alt="chaman morado" />
    <div className="search-bar">
      <Input
        id="search-bar"
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
    <div className="icons">
      <div className="icons__item">
        <Icon>person</Icon>
        <p>Mi cuenta</p>
      </div>
      <div className="icons__item">
        <Icon>favorite</Icon>
        <p>Mis favoritos</p>
      </div>
      <div className="icons__item">
        <Icon>publish</Icon>
        <p>Cargar pedido masivo</p>
      </div>
      <div className="icons__item">
        <ShoppingCartIcon />
        <p>Mi carrito</p>
      </div>
    </div>
  </div>
);

export default Navbar;
