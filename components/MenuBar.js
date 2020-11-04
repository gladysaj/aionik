import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const MenuBar = () => (
  <div className="menu">
    <FormControl>
      <NativeSelect className="menu__options">
        <option value="">DEPARTAMENTOS</option>
        <option value={1}>Electricidad</option>
        <option value={2}>Herramientas</option>
        <option value={3}>Pintura</option>
      </NativeSelect>
    </FormControl>
    <FormControl>
      <NativeSelect className="menu__options">
        <option value="">MARCAS</option>
        <option value={1}>Truper</option>
        <option value={2}>Voltmex</option>
        <option value={3}>Dewalt</option>
      </NativeSelect>
    </FormControl>
    <FormControl>
      <NativeSelect className="menu__options">
        <option value="">OFERTAS</option>
      </NativeSelect>
    </FormControl>
  </div>
);

export default MenuBar;
