import { StylesConfig } from "react-select"

export const styles: StylesConfig = {
  control: (base, props) => ({
    ...base,
    maxWidth: 240,
    borderRadius: props.menuIsOpen ? '6px 6px 0px 0px' : '6px',
    border: '1px solid var(--primary-color)',
    boxShadow: 'none',
    ":hover": {
      border: '1px solid var(--primary-color)',      
    },
    ":focus": {
      boxShadow: 'none'
    }
  }),
  valueContainer: (base) => ({
    ...base,
    paddingLeft: 10
  }),
  input: (base) => ({
    ...base,
    color: 'var(--dark-color)',
    fontFamily: 'var(--font-family)',
    fontSize: 16,
  }),
  placeholder: (base) => ({
    ...base,
    color: 'var(--dark-color)',
    fontFamily: 'var(--font-family)'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  dropdownIndicator: (base, props) => ({
    ...base,
    color: 'var(--primary-color)',
    transition: '0.5s',
    transform: `rotateZ(${props.isFocused ? '180deg' : ''})`,
  }),
  menu: (base) => ({
    ...base,
    maxWidth: 240,
    margin: 0,
    borderRadius: '0px 0px 6px 6px',
    border: '1px solid var(--primary-color)',
    overflow: 'hidden',
    borderTop: 'none',
  }),
  menuList: (base) => ({
    ...base,
    padding: 0
  }),
  option: (base) => ({
    ...base,
    fontFamily: 'var(--font-family)',
    fontSize: 14,
    paddingLeft: 10,
    ":hover": {
      backgroundColor: 'var(--grey-100)'
    } 
  })
}